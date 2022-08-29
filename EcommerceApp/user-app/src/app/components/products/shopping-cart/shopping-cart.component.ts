import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public totalItems: number = 0;
  public totalPrice: number = 0;

  constructor(public db: ProductsService) { }

  ngOnInit(): void {
   this.calculate(); 
  }


  removeProductFromCart(prdIdx:number){
    let elements = this.db.cartProducts.splice(prdIdx, 1);
    console.log(elements[0], "Product Removed from cart");
    this.calculate();
    
  }
  calculate(){
    this.totalItems = this.db.cartProducts.reduce((prev, next)=> prev + next['quantity'], 0);
    this.totalPrice = this.db.cartProducts.reduce((prev, next)=> prev + (next['price'] * next['quantity']),0);

  }
}
