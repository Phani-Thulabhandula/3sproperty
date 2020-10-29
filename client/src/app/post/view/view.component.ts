import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import icFav from '@iconify/icons-ic/round-favorite-border';
import icFavChecked from '@iconify/icons-ic/round-favorite';

@Component({
  selector: 'vex-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  currentIndex: number = 0;
  images: any = [];
  icFav = icFav;
  icFavChecked = icFavChecked;
  isFav:boolean = false;
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
  }
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if (p.id) {
        this.getPropertyById(p.id)
      }
    });
  }


  imageMove(isPre) {
    if (isPre) {
      this.currentIndex == 0 ? this.currentIndex = this.images.length - 1 : (this.currentIndex = this.currentIndex - 1)
    } else {
      this.currentIndex == this.images.length - 1 ? this.currentIndex = 0 : (this.currentIndex = this.currentIndex + 1)

    }
  }

  getPropertyById(id) {
    this.apiService.getPropertyById(id).subscribe((res: any) => {
      this.postInfo = res;
      this.images = res.images
    })
  }
}
