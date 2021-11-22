import { Component, OnInit } from '@angular/core';

//↓product-detail.component.tsでproduct-listings.component.html(のngFor)から送られてきたindexを読み込むために使用
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")!]
    })
  }

}
