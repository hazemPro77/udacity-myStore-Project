import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import {  AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() curView = '';
  @Input() productAmount = 1;

  @Output() totalPrice: EventEmitter<number> = new EventEmitter;

  productsNo:any =  [];
  amount:number = 1;
  selectednum: number = 1;
  private sum = 0;
  
  

  constructor(private mService: AppServiceService, private route: Router) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: ''
    }
   }

  ngOnInit(): void {
    this.getProductsNo();
    this.getTotalPrice();
  }

  getProductsNo() {
    for(let i=1; i < 11; i++) {
      this.productsNo.push(i);
    }
  }

  getProductDetails(product: Product) {
    //const result = this.products.find(({id}) => id === productID);
    if(product) {
      this.mService.product = product;
      this.route.navigateByUrl('product-details');
    }
  }

  addToCart(product: Product) {
    const productAmount = {amount: this.amount};
    const finalProduct = Object.assign(product, productAmount); 
    const result = this.mService.cartProducts.find((p: {id:number}) => p.id === product.id);

    if(result) {
     result.amount = this.selectednum;
     alert('This product is already in your cart, The product number has been updated successfully!')
     return;
    } else
     {
      this.mService.cartProducts.push(finalProduct);
      alert('Choosen item has been added to your cart');
    }
  }

  removeProduct(product: Product) {
    this.mService.cartProducts = this.mService.cartProducts.filter((p: { id: number; }) => p.id !== product.id);
    alert('The choosen Item has been removed successfully')
    this.route.navigateByUrl('');
  }

  getTotalPrice() {
    this.mService.cartProducts.forEach((elem: { price: number; amount: number; }) => {
      this.sum+=elem.price * elem.amount;
    })
    this.totalPrice.emit(this.sum);
  } 

  showValue() {
    //this.amount= $event.target.value;
    this.amount = this.selectednum;
  }

}
