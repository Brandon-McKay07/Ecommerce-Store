import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl:string  = 'https://fakestoreapi.com/products';

  public wishlistProducts:any [] = [];
  public cartProducts:any[]=[];
  public products:any[]=[];

  public productsSub:BehaviorSubject<any[]>= new BehaviorSubject<any[]>([]);
  public productsRetrieved: boolean = false;

  
  

  constructor(private httpClient: HttpClient) { }

  getProducts() {
     this.httpClient.get(this.productUrl).subscribe(
      (res)=>{
        this.productsSub.next(Object.assign([],res))
        this.productsRetrieved = true
      }
    );
    
  }


   // add products to cart
   addProductToShoppingCart(prd:any, prdRemoveBool?: boolean, prdIdx=-1) {
    // add product into cart for multiple time.
    if(this.cartProducts.some(x=>x["id"]===prd["id"])) { 
      let idx = this.cartProducts.findIndex(x=> x["id"]===prd["id"]);
      this.cartProducts[idx]["quantity"] +=1;
      console.log(prd['title'], "Alreay Added to Cart, Quantity Updated");
    } else{
      this.cartProducts.push( {
        ...prd,
        "quantity": 1
      });
      console.log(prd['title'], "Product Added to Shoping Cart");
    }
  }
  //add product to wishlist
  addProductToWishlist(prd:any, prdRemoveBool?: boolean, prdIdx:number = -1){
    if(!this.wishlistProducts.some(x=>x["id"]===prd["id"])){
      this.wishlistProducts.push({
        ...prd, "quantity":1
      });
      console.log(prd['title'], "Product is added");
      
    } else {
      console.log(prd['title'],"Already exists");
    }
    if(prdRemoveBool){
      this.products.splice(prdIdx, 1);
    }

  }

 
 
}