import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Shedules/:name',loadChildren: () => import('./shedules-comunitys/shedules-comunitys.module').then(m => m.ShedulesComunitysModule)},
  {path: 'Comunity/:name',loadChildren: () =>        import('./user-comunitys/user-comunitys.module').then(m => m.UserComunitysModule)},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ComunitysRoutingModule { }
