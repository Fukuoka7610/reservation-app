import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';

const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent }, // URLでlocalhost:4200/products以降が、何もない場合はProductListへと案内する
      { path: ':productId', component: ProductDetailComponent }, // URLでlocalhost:4200/products以降が、/detailの場合はProductDetailへと案内する
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    //↓"product-list.component.html"でngForを使用しているため、Angularライブラリの"CommonModule"をインポートする必要がある
    CommonModule, 
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
