import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from 'src/app/core/guards/user-logged.guard';

const routes: Routes = [
  {path: 'Axiliary-Tables',loadChildren: () => import('./auxiliary-tables/auxiliary-tables.module').then(m => m.AuxiliaryTablesModule),canActivate: [UserLoggedGuard]},
  {path: 'Profiles',loadChildren: () =>        import('./profiles/profiles.module').then(m => m.ProfilesModule),canActivate: [UserLoggedGuard]},
  {path: 'Users',loadChildren: () =>           import('./users/users.module').then(m => m.UsersModule),canActivate: [UserLoggedGuard]},
  {path: 'Options-Menu',loadChildren: () =>    import('./options-menu/options-menu.module').then(m => m.OptionsMenuModule),canActivate: [UserLoggedGuard]},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
