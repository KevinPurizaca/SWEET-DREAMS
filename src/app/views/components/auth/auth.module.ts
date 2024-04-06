import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'primeng/api';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
