import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComunitysComponent } from './user-comunitys.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserComunitysComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class UserComunitysRoutingModule { }
