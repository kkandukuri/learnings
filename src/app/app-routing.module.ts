import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GstAddComponent} from './gst-add/gst-add.component'
import {GstEditComponent} from './gst-edit/gst-edit.component'
import {GstGetComponent} from './gst-get/gst-get.component'
const routes: Routes = [
  {
    path:'business/create',
    component:GstAddComponent
  },
  {
    path:'business/edit',
    component:GstEditComponent
  },
  {
    path:'business/get',
    component:GstGetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
