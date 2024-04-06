import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './views/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './views/components/auth/login/login.component';
import { UserLoggedGuard } from './core/guards/user-logged.guard';
import { IntentoLoginGuard } from './core/guards/intento-login.guard';

const routes: Routes = [
    {
      path: '', redirectTo: 'login', pathMatch: 'full' 
    },
    {
        path: 'inicio', component: AppLayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          {
            path: 'home',
            loadChildren: () => import('./views/components/dashboard/dashboard.module').then(m => m.DashboardModule)
           },
        ],
      },
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'Masters', loadChildren: () => import('./views/masters/masters.module').then(m => m.MastersModule),canActivate: [UserLoggedGuard] },
        ]
    },
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'Group-Comunity', loadChildren: () => import('./views/Comunitys/comunitys.module').then(m => m.ComunitysModule),canActivate: [UserLoggedGuard] },

        ]
    },
              {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'Administration', loadChildren: () => import('./views/administration/administration.module').then(m => m.AdministrationModule),canActivate: [UserLoggedGuard] },

        ]
    },


    { path: 'login', component: LoginComponent,canActivate: [IntentoLoginGuard] },

    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },

]


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
