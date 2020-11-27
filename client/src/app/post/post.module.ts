import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CreateComponent } from './create/create.component';
import { MypostsComponent } from './myposts/myposts.component';

import { MatBadgeModule } from '@angular/material/badge';
import { IconModule } from '@visurel/iconify-angular';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollbarModule } from '../../@vex/components/scrollbar/scrollbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../@vex/directives/container/container.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { NgImageSliderModule } from 'ng-image-slider';
import { ViewComponent } from './view/view.component';
import { ViewallComponent } from './viewall/viewall.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [PostComponent, CreateComponent, MypostsComponent, ViewComponent, ViewallComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FlexLayoutModule,
    MatBadgeModule,
    IconModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ScrollingModule,
    FormsModule,
    MatMenuModule,
    ScrollbarModule,
    ContainerModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    NgxDropzoneModule,
    MatCheckboxModule
    // IvyCarouselModule
    // NgImageSliderModule
  ]
})
export class PostModule { }
