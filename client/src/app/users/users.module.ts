import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { IconModule } from '@visurel/iconify-angular';
import { MatRippleModule } from '@angular/material/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollbarModule } from '../../@vex/components/scrollbar/scrollbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../@vex/directives/container/container.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    MatFormFieldModule
  ]
})
export class UsersModule { }
