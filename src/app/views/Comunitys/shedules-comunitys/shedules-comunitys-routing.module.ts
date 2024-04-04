import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShedulesComunitysComponent } from './shedules-comunitys.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ShedulesComunitysComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class ShedulesComunitysRoutingModule { }
