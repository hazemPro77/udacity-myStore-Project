import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from "rxjs";

import { Product } from '../models/product';

import { AppServiceService } from '../services/app-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  private productsSubscribe: Subscription = new Subscription;
  


  constructor(private mService: AppServiceService) { }

  ngOnInit(): void {
    this.productsSubscribe =  this.mService.products.subscribe(data => {
      this.products = data;
    })
  }

  ngOnDestroy(): void {
    if(this.productsSubscribe) {
      this.productsSubscribe.unsubscribe();
    }
  }

}
