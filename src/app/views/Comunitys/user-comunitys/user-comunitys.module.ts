import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComunitysRoutingModule } from './user-comunitys-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UserComunitysRoutingModule
  ]
})
export class UserComunitysModule { }
