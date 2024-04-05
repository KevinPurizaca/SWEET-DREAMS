import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangesComponent } from './ranges.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RangesComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class RangesRoutingModule { }
