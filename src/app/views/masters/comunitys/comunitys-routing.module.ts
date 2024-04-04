import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunitysComponent } from './comunitys.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ComunitysComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class ComunitysRoutingModule { }
