//"app.component.html"の<router-outlet>によるコンポーネントの差し替え操作を記述

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // URLがlocalhost:4200であってもProductListページを表示させたいので、リダイレクトさせた
  //{ path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
