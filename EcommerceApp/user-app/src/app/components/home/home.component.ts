import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fetching: boolean = false;
  products:any[]=[];
  wishlistProducts:any[] =[];

  constructor(private productSrv:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productSrv.getProducts();
    this.productSrv.productsSub.subscribe(res=>{
      if(res.length !==0 ) {
        this.products = Object.assign([], res);
        this.fetching = false;
        console.log(this.products);
      }
    })
  }
 
}
