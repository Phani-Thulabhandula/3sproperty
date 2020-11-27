import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './services/api.service'

@Component({
  selector: 'vex-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router, ) { }
  search: String = '';

  recentPosts = [];
  isRecentPostsLoading = false;

  ngOnInit(): void {
    this.getRecentPosts();
  }

  navigate() {

    this.router.navigate(['/posts/search'], { queryParams: { search: this.search } })

  }

  getRecentPosts() {
    this.isRecentPostsLoading = true;
    this.apiService.getRecentPosts().subscribe((res: any) => {
      this.recentPosts = res;
      this.isRecentPostsLoading = false;
    })
  }

}
