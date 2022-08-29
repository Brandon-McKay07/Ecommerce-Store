import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl:string  = 'https://fakestoreapi.com/products';

  public wishlistProducts:any [] = [];
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