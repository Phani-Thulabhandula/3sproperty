import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";

import icBack from '@iconify/icons-ic/keyboard-backspace';
import icSearch from '@iconify/icons-ic/twotone-search';
import icDrag from '@iconify/icons-ic/twotone-drag-indicator';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDeparture from '@iconify/icons-ic/sharp-flight-takeoff';
import icArrival from '@iconify/icons-ic/sharp-flight-land';
import icFlight from '@iconify/icons-ic/baseline-flight';
import icBox from '@iconify/icons-ic/sharp-all-inbox';
import icPassenger from '@iconify/icons-ic/sharp-person';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icDate from '@iconify/icons-ic/sharp-date-range';
import icClose from '@iconify/icons-ic/twotone-close';
import icPersonAdd from '@iconify/icons-ic/outline-person-add';
import icLocationAdd from '@iconify/icons-ic/twotone-add-location-alt';
import { DatePipe } from '@angular/common';
import icUpload from '@iconify/icons-ic/round-cloud-upload';
import icDelete from '@iconify/icons-ic/delete';
import icMoney from '@iconify/icons-ic/round-attach-money';


import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'vex-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class CreateComponent implements OnInit {

  icSearch = icSearch;
  icDrag = icDrag;
  icAdd = icAdd;
  icUpload = icUpload;
  icDelete = icDelete;
  icBack = icBack;
  icDeparture = icDeparture;
  icArrowDropDown = icArrowDropDown;
  icArrival = icArrival;
  icFlight = icFlight;
  icPassenger = icPassenger;
  icBox = icBox;
  icDate = icDate;
  icClose = icClose;
  icPersonAdd = icPersonAdd;
  icLocationAdd = icLocationAdd;
  icMoney = icMoney;
  form: FormGroup;
  formBuilder: FormBuilder;

  types: any[] = []
  property_types: any[] = []
  furnishings: any[] = []
  listed_bys: any[] = []

  files: any[] = [];
  isUpdate: boolean = false;
  postId: String = ''

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  handleFileInput(files) {
    files.forEach(element => {
      let fd = new FormData();
      fd.append('image', element)
      this.apiService.uploadImage(fd).subscribe((res: any) => {
        this.files.push({ path: res.filename, isLoading: false })
      })
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private el: ElementRef,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // console.log(this.route.params.get('id'));
    this.route.params.subscribe(r => {
      console.log(r);
      if (r.id) {
        this.postId = r.id;
        this.isUpdate = true;
        this.getPostById(r.id);
      } else {
        this.isUpdate = false;
      }
    })
    this.getDropDowns();
    this.inItForm();
  }

  inItForm() {
    this.form = this.fb.group(
      {
        title: [null, Validators.required],
        type: [null, Validators.required],
        description: [null, Validators.required],
        property_type: [null, Validators.required],
        furnishing: [null, Validators.required],
        isAvailable: [true, Validators.required],
        rent: [null, Validators.required],
        car_parking: [null, Validators.required],
        floor_number: [null, Validators.required],
        age: [null, Validators.required],
        landmarks: [null, Validators.required],
        location: [null, Validators.required]
      }
    )
  }

  submit() {
    console.log({ ...this.form.value, images: this.files.map(f => f.path) }, "FORM VALID ==>", this.form.valid);
    if (this.form.valid) {
      var body = { ...this.form.value, images: this.files };
      if (this.isUpdate) {
        this.apiService.updateProperty({ ...body, id: this.postId }).subscribe(r => {
          if (r['success']) {
            this.router.navigate(['posts/view-my-properties'])
          }
        })
      } else {
        this.apiService.addProperty(body).subscribe(r => {
          if (r['success']) {
            this.router.navigate(['posts/view-my-properties'])
          }
        })
      }
    } else {
      this.form.markAllAsTouched();
    }
  }



  getDropDowns() {
    this.apiService.getDropDowns().subscribe(res => {
      this.types = res['types'];
      this.property_types = res['property_types'];
      this.listed_bys = res['listed_bys'];
      this.furnishings = res['furnishings']
    })
  }

  remove(file, i) {
    this.apiService.removeImage(file).subscribe(res => {
      this.files.splice(i, 1)
    });
  }

  getPostById(id) {
    this.apiService.getPropertyById(id).subscribe((res: any) => {
      this.form.patchValue({ ...res, furnishing: res.furnishing, type: res.type, property_type: res.property_type });
      this.files = res.images
    })
  }
}
