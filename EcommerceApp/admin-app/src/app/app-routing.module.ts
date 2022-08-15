import { ProductViewComponent } from './components/products/product-view/product-view.component';

import { UserViewComponent } from './components/users/user-view/user-view.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductCategoryComponent } from './components/products/product-category/product-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { OrdersComponent } from './../../../user-app/src/app/components/orders/orders.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path :'home', component:HomeComponent},
  {path :'auth', component:AuthComponent},
  {path:'about', component:AboutComponent},
  {path :'contactus', component:ContactusComponent},
  {path :'orders', component:OrdersComponent},
  {path :'shipments', component:ShipmentsComponent},
  {path :'payments', component:PaymentsComponent},
  {path :'products', children:[
    { path :'', component: ProductsComponent },
    { path :'create', component: ProductCreateComponent },
    { path :'view', component: ProductViewComponent },
    { path :'categories', component: ProductCategoryComponent },
  ]},
  {path :'orders', component:OrdersComponent},
  {path:'users', children:[
    {path : '', component:UsersComponent},
    {path : 'create', component:UserCreateComponent},
    {path : 'view', component:UserViewComponent},
    
  ]},
  {path :'productlist', component:ProductCategoryComponent},
  {path :'createeditproduct', component:ProductCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
