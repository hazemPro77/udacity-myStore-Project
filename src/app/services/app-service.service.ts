import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product }from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

   product =  {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }

  cartProducts: any= [];
  curView = '';
  productAmount: number = 1;
  clientName = '';
  totalPrice = 0;


  private _productsList = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) { }

  get products() {
    return this._productsList.asObservable();
  }

  fetchProducts() {
    return this.httpClient.get<Product[]>("assets/data.json").pipe(tap(
      data => {
        if(!data) {
          return;
        }
        this._productsList.next(data);
      }
    ))
  }

  
}
