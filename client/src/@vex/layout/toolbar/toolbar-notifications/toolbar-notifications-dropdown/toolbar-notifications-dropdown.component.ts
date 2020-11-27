import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';
import { DateTime } from 'luxon';
import { trackById } from '../../../../utils/track-by';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icShoppingBasket from '@iconify/icons-ic/twotone-shopping-basket';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icInsertChart from '@iconify/icons-ic/twotone-insert-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icDescription from '@iconify/icons-ic/twotone-description';
import icFeedback from '@iconify/icons-ic/twotone-feedback';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icFileCopy from '@iconify/icons-ic/twotone-file-copy';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { PopoverRef } from '../../../../components/popover/popover-ref';

@Component({
  selector: 'vex-toolbar-notifications-dropdown',
  templateUrl: './toolbar-notifications-dropdown.component.html',
  styleUrls: ['./toolbar-notifications-dropdown.component.scss']
})
export class ToolbarNotificationsDropdownComponent implements OnInit {

  notifications: any[] = [];

  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icClearAll = icClearAll;
  icNotificationsOff;
  trackById = trackById;

  constructor(private cd: ChangeDetectorRef,
    public authService: AuthService,
    private router: Router,
    private popoverRef: PopoverRef<ToolbarNotificationsDropdownComponent>) { }

  ngOnInit() {
    this.getNotifications();
  }
  getRoute(n) {
    if (n.type == "chat") {
      this.router.navigate(["/chat/" + n.ref])
    } else {
      this.router.navigate(["/posts/view/" + n.ref])
    };
    this.authService.markAllReadNotification({}).subscribe(res => {

    });
    this.close();
  }

  getNotifications() {
    this.authService.getNotification().subscribe((res: any) => {
      this.notifications = res.notifications || [];
    });
  }

  markAllAsRead() {
    this.authService.markAllReadNotification({}).subscribe(res => {
      console.log(res);
    })
  }

  close() {
    this.popoverRef.close();
  }

}
//