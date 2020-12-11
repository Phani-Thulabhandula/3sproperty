import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import icFav from '@iconify/icons-ic/round-favorite-border';
import icFavChecked from '@iconify/icons-ic/round-favorite';

import { ScrollbarComponent } from '../../../@vex/components/scrollbar/scrollbar.component';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSend from '@iconify/icons-ic/twotone-send';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icVolumeMute from '@iconify/icons-ic/twotone-volume-mute';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { AuthService } from '../../../@vex/services/auth.service';

@Component({
  selector: 'vex-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class ViewComponent implements OnInit {

  constructor(private apiService: ApiService,
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }
  currentIndex: number = 0;
  images: any = [];
  icFav = icFav;
  icFavChecked = icFavChecked;
  icAccountCircle = icAccountCircle;
  icClearAll = icClearAll;
  icVolumeMute = icVolumeMute;
  icCheckCircle = icCheckCircle;
  icMoreVert = icMoreVert;
  icSend = icSend;
  icMenu = icMenu;
  isFav: boolean = false;
  postInfo: any = {
    title: "",
    type: {},
    description: "",
    property_type: {},
    furnishing: {},
    isAvailable: "",
    rent: 0,
    car_parking: 0,
    floor_number: 0,
    age: 0,
    landmarks: "",
    location: ""
  };
  userInfo = {
    id: ''
  }
  messages = [];
  form: FormGroup;
  autoMessages: any = ["Schedule a visit", "Call me at: ", "Exact location please"];

  related_posts: any = [];
  isRealtedPostLoading: Boolean = false;

  @ViewChild(ScrollbarComponent, { static: true }) scrollbar: ScrollbarComponent;

  ngOnInit(): void {
    this.form = this.fb.group({
      message: [null]
    })
    this.userInfo = this.authService.userInfo;
    this.route.params.subscribe(p => {
      if (p.id) {
        this.getPropertyById(p.id);
        setInterval(() => {
          this.getPostMessages();
        }, 11000)
      }
    });
    // this.filterMessages()
  }


  imageMove(isPre) {
    if (isPre) {
      this.currentIndex == 0 ? this.currentIndex = this.images.length - 1 : (this.currentIndex = this.currentIndex - 1)
    } else {
      this.currentIndex == this.images.length - 1 ? this.currentIndex = 0 : (this.currentIndex = this.currentIndex + 1)

    }
  }

  getPropertyById(id) {
    this.isRealtedPostLoading = true;
    this.apiService.getPropertyById(id).subscribe((res: any) => {
      this.isRealtedPostLoading = false;
      this.postInfo = res;
      this.related_posts = res['recent_posts'] || [];
      this.getPostMessages();

      this.images = res.images
    })
  }


  scrollToBottom() {
    this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
      behavior: 'smooth',
      top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
    });
  }

  send() {
    if (this.form.value.message) {
      let message = {
        from: this.userInfo.id,
        to: this.postInfo.user_id,
        message: this.form.value.message,
        post_id: this.postInfo._id
      }
      this.messages.push(message);
      this.form.get('message').setValue('');
      this.apiService.sendPostMessage(message).subscribe((res: any) => {
        console.log(res);

      })
    }
    // this.cd.detectChanges();
    this.scrollToBottom();
  }

  getPostMessages() {
    if (this.postInfo._id) {
      this.apiService.getPostMessages(this.postInfo._id).subscribe((res: any) => {
        this.messages = res.messages || [];
      })
    }

  }
  setMessage(m) {
    this.form.patchValue({ message: m });
  }
}
