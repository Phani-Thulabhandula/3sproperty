import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ViewComponent } from './view/view.component';
import { ViewallComponent } from './viewall/viewall.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'update/:id',
    component: CreateComponent,
  },
  {
    path: 'view-my-properties',
    component: MypostsComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent,
  },
  {
    path: 'search',
    component: ViewallComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
