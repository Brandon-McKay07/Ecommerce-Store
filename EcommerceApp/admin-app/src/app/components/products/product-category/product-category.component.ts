import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  public categoryObservable: Observable<any[]> = new Observable();
  

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoryObservable = this.categoriesService.getCategories();
  }

}
