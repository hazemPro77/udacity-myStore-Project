import { Component, OnInit } from '@angular/core';

import { AppServiceService } from '../services/app-service.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  product =  {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }

  constructor(private mService: AppServiceService) { }

  ngOnInit(): void {
    this.product = this.mService.product;
  }

}
