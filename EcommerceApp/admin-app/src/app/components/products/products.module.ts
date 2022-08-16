import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCategoriesComponent } from './product-category/product-category.component';
import { RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductViewComponent,
    ProductCategoriesComponent,
    
   
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
   
  ]
})
export class ProductsModule { }
