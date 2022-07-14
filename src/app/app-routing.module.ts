import { SuccessFormComponent } from './success-form/success-form.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'product-details', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success-form', component: SuccessFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
