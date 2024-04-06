import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from 'src/app/core/guards/user-logged.guard';

const routes: Routes = [
  {path: 'Shedules/:name',loadChildren: () => import('./shedules-comunitys/shedules-comunitys.module').then(m => m.ShedulesComunitysModule),canActivate: [UserLoggedGuard]},
  {path: 'Comunity/:name',loadChildren: () =>        import('./user-comunitys/user-comunitys.module').then(m => m.UserComunitysModule),canActivate: [UserLoggedGuard]},

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
