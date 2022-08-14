import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductViewComponent,
    ProductCategoryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
