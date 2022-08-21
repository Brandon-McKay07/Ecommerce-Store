import { ProductsComponent } from './products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewComponent } from './view/view.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
      ProductsComponent,
      ViewComponent,
      WishlistComponent,
      ShoppingCartComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
