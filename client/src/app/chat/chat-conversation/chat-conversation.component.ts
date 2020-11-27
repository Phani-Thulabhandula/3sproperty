import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Chat, ChatMessage } from '../chat.component';
import { chatMessages } from '../../static_data/chat-messages';
import { trackById } from '../../../@vex/utils/track-by';
// import { chats } from '../../static-data/chats';
import { map } from 'rxjs/operators';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSend from '@iconify/icons-ic/twotone-send';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icVolumeMute from '@iconify/icons-ic/twotone-volume-mute';
import { fadeInUp400ms, } from '../../../@vex/animations/fade-in-up.animation';
import { FormControl, FormGroup } from '@angular/forms';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { ScrollbarComponent } from '../../../@vex/components/scrollbar/scrollbar.component';
import { ChatService } from '../chat.service';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { AuthService } from '../../../@vex/services/auth.service';
// import { chats } from '../../static_data/chats';


@UntilDestroy()
@Component({
  selector: 'vex-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger20ms
  ]
})
export class ChatConversationComponent implements OnInit {

  chat: any;
  messages: any[] = [];

  form = new FormGroup({
    message: new FormControl()
  });

  icAccountCircle = icAccountCircle;
  icClearAll = icClearAll;
  icVolumeMute = icVolumeMute;
  icCheckCircle = icCheckCircle;
  icMoreVert = icMoreVert;
  icSend = icSend;
  icMenu = icMenu;
  trackById = trackById;
  userInfo = {
    id: ''
  }
  @ViewChild(ScrollbarComponent, { static: true }) scrollbar: ScrollbarComponent;

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    public authService: AuthService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.userInfo = this.authService.userInfo;

    this.route.params.subscribe((params: any) => {
      console.log(params);

      this.messages = [];
      this.getMessages(params.chatId)
      // this.cd.detectChanges();
      // this.chat = chats.find(chat => chat.id === chatId);
      // this.chat.unreadCount = 0;
      // this.filterMessages(chatId);
      // this.cd.detectChanges();

      // this.scrollToBottom();
    });
  }

  // filterMessages(id: ChatMessage['id']) {
  //   this.messages = chatMessages.filter(message => message.id === id);
  // }

  send() {
    console.log("FDgfsd");

    if (this.form.get("message").value) {
      let message = {
        from: this.userInfo.id,
        to: this.chat.from,
        message: this.form.get("message").value,
        post_id: this.chat.post_id
      }
      this.messages.push({ ...message });
      this.form.get('message').setValue('');
      this.chatService.sendPostMessage(message).subscribe((res: any) => {
        console.log(res);

      })
    }
    // this.cd.detectChanges();
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
      behavior: 'smooth',
      top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
    });
  }

  openDrawer() {
    this.chatService.drawerOpen.next(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.drawerOpen.next(false);
    this.cd.markForCheck();
  }

  getMessages(chat_id) {
    this.chatService.getChatMessages(chat_id).subscribe((resp: any) => {
      this.messages = resp.messages || [];
      this.chat = resp.chat;
      this.cd.detectChanges();

    })
  }

  getTitle(chat) {
    if (chat && chat.from && chat.post_id) {
      return `${chat.from.first_name} (${chat.post_id.title})`
    }
    return ''
  }
}
