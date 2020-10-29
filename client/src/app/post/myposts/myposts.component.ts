import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'vex-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss']
})
export class MypostsComponent implements OnInit {

  constructor(private apiService: ApiService,
    private router: Router, ) { }
  myPosts: any = []
  ngOnInit(): void {
    this.getMyPosts()
  }

  getMyPosts() {
    this.apiService.getMyPosts({}).subscribe((res: any) => {
      this.myPosts = res.posts;
    })
  }

}
