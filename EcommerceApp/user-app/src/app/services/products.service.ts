import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl:string  = 'https://fakestoreapi.com/products';
  constructor(private httpClient: HttpClient) { }

  getProducts(){
   return this.httpClient.get(this.productUrl);
  }
}
