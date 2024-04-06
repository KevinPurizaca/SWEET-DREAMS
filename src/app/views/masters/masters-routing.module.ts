import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from 'src/app/core/guards/user-logged.guard';

const routes: Routes = [
  {path: 'Categorys',loadChildren: () => import('./categorys/categorys.module').then(m => m.CategorysModule),canActivate: [UserLoggedGuard]},
  {path: 'Products',loadChildren:  () => import('./products/products.module').then(m => m.ProductsModule),canActivate: [UserLoggedGuard]},
  {path: 'Brands',loadChildren:    () => import('./brands/brands.module').then(m => m.BrandsModule),canActivate: [UserLoggedGuard]},
  {path: 'Comunitys',loadChildren: () => import('./comunitys/comunitys.module').then(m => m.ComunitysModule),canActivate: [UserLoggedGuard]},
  {path: 'Ranges',loadChildren: () => import('./ranges/ranges.module').then(m => m.RangesModule),canActivate: [UserLoggedGuard]},

  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
