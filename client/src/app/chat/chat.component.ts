import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import icSearch from '@iconify/icons-ic/twotone-search';
import icChat from '@iconify/icons-ic/twotone-chat';
import { fadeInUp400ms } from '../../@vex/animations/fade-in-up.animation';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { trackById } from '../../@vex/utils/track-by';
import { stagger80ms } from '../../@vex/animations/stagger.animation';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChatService } from './chat.service';
import { OnlineStatus } from '../../@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { AuthService } from '../../@vex/services/auth.service';
// import { chats } from '../static_data/chats';

export interface Chat {
  id: number;
  imageSrc: string;
  from: string;
  status: string;
  message: string;
  unreadCount: number;
  timestamp: string;
}

export interface ChatMessage {
  id: number;
  from: 'me' | 'partner';
  message: string;
}


@UntilDestroy()
@Component({
  selector: 'vex-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class ChatComponent implements OnInit, OnDestroy {

  // chats$: Observable<Chat[]> = of(chats).pipe(
  //   // Fix to allow stagger animations with static data
  //   delay(0)
  // );

  chats: any = [];

  mobileQuery = this.mediaMatcher.matchMedia('(max-width: 959px)');
  drawerOpen$ = this.chatService.drawerOpen$;

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  icCheckCircle = icCheckCircle;
  icSearch = icSearch;
  icChat = icChat;
  trackById = trackById;
  private _mobileQueryListener: () => void;
  userInfo = {
    id: "",
    avatar: ""
  }

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService,
    private mediaMatcher: MediaMatcher,
    private chatService: ChatService) { }

  ngOnInit() {
    this.userInfo = this.authService.userInfo;
    this.getChats();
    this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
    this._mobileQueryListener = () => {
      this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
      this.cd.detectChanges();
    };
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.mobileQuery.matches),
      untilDestroyed(this)
    ).subscribe(() => this.closeDrawer());
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  drawerChange(drawerOpen: boolean) {
    this.chatService.drawerOpen.next(drawerOpen);
  }

  openDrawer() {
    this.chatService.drawerOpen.next(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.drawerOpen.next(false);
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  getChats() {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats || [];
      this.cd.detectChanges();

    })
  }
}
