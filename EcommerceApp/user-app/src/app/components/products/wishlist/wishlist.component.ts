import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public db:ProductsService) { }

  ngOnInit(): void {
  }

  removeProductFromWishlist(prdIdx:number){
    let elements = this.db.wishlistProducts.splice(prdIdx, 1);
    console.log(elements[0]['title'], "Product removed from wishlist");
  }
}
