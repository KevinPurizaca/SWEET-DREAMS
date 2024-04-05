import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Categorys',loadChildren: () => import('./categorys/categorys.module').then(m => m.CategorysModule)},
  {path: 'Products',loadChildren:  () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'Brands',loadChildren:    () => import('./brands/brands.module').then(m => m.BrandsModule)},
  {path: 'Comunitys',loadChildren: () => import('./comunitys/comunitys.module').then(m => m.ComunitysModule)},
  {path: 'Ranges',loadChildren: () => import('./ranges/ranges.module').then(m => m.RangesModule)},

  
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
