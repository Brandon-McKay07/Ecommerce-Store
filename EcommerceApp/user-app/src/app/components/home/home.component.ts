import { ProductsService } from './../../../../../admin-app/src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fetching: boolean = false;
  products:any;

  constructor(private productSrv:ProductsService) { }

  ngOnInit(): void {
  }


  getProducts() {
    this.productSrv.getProducts().subscribe( {
    next: (data)=> {  this.products = data},
    error: (e)=> { console.log(e) }    
  });
  }
}
