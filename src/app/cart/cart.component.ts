import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any =[];
  
  clientName = '';
  clientAddress = '';
  clientCreditCardNumber = '';
  finalSum = 0;

  constructor(private mService: AppServiceService, private route: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.mService.cartProducts;
  }

 
  getFinalPrice(TPrice:number) {
    this.finalSum = TPrice;
    this.mService.totalPrice = TPrice;
  }

  sumitForm() {
    this.mService.clientName = this.clientName
    this.route.navigateByUrl('success-form')
  }

}
