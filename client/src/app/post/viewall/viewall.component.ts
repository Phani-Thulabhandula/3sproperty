import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import icTile from '@iconify/icons-ic/baseline-qrcode';
import icList from '@iconify/icons-ic/baseline-view-day';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { AuthService } from '../../../@vex/services/auth.service';

@Component({
  selector: 'vex-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class ViewallComponent implements OnInit {

  constructor(private apiService: ApiService,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }
  search: String = '';
  isTileView = true;
  icTile = icTile;
  icList = icList;

  sortBy = 1;
  types: any[] = []
  property_types: any[] = []
  furnishings: any[] = []
  listed_bys: any[] = [];

  sortByOptions: any = [{
    id: 1,
    name: "Price:High to Low",
  }, {
    id: 2,
    name: "Price:Low to High"
  }, {
    id: 3,
    name: "Date Published",
  }
  ]

  filters: any = {
    type: [],
    property_type: [],
    prize_range_from: 0,
    prize_range_to: 0,
    furnishing: [],
    posted_since: ''
  };
  isLoading: Boolean = false;

  posts: any = []

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      if (res.search) {
        this.search = res.search
      }
      console.log(res);

    });
    this.getDropDowns();
    this.getActivePosts()
  }

  getDropDowns() {
    this.apiService.getDropDowns().subscribe(res => {
      this.types = res['types'].map(r => { r['selected'] = false; return r });
      this.property_types = res['property_types'].map(r => { r['selected'] = false; return r });
      this.furnishings = res['furnishings'].map(r => { r['selected'] = false; return r });
    })
  }

  getActivePosts() {
    this.isLoading = true;
    let body = { search: this.search, sortBy: this.sortBy, type: this.types.filter(r => r.selected).map(e => e.name), property_type: this.property_types.filter(r => r.selected).map(e => e.name), furnishing: this.furnishings.filter(r => r.selected).map(e => e.name) }
    this.apiService.getActivePosts(body).subscribe(res => {
      this.posts = res['posts'] || [];
      this.isLoading = false;
    })
  }
}
