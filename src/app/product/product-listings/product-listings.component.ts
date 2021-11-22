import { Component, OnInit } from '@angular/core';

import { products } from 'src/app/products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit(): void { // 変数の初期化を行う場所
    /* 
      export class ProductListComponentのproducts(this.products)をsrc/app/products.tsのproductsで初期化
      これを行うことで、product-listings.component.htmlの*ngForのproductsに、src/app/products.tsのproductsの情報を渡すことができる
    */
    this.products = products;
  }

}
