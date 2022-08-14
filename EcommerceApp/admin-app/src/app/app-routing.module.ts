import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductCategoryComponent } from './components/products/product-category/product-category.component';
import { UserDetailsComponent } from './components/navbar/user-details/user-details.component';
import { EditUserComponent } from './components/navbar/create/edit-user/edit-user.component';
import { UserListComponent } from './components/navbar/user-list/user-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { OrdersComponent } from './../../../user-app/src/app/components/orders/orders.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path :'home', component:HomeComponent},
  {path :'auth', component:AuthComponent},
  {path :'about', component:AboutComponent},
  {path :'contactus', component:ContactusComponent},
  {path :'orders', component:OrdersComponent},
  {path :'shipments', component:ShipmentsComponent},
  {path :'payments', component:PaymentsComponent},
  {path :'products', component:ProductsComponent},
  {path :'orders', component:OrdersComponent},
  {path :'userlist', component:UserListComponent},
  {path :'createedituser', component:EditUserComponent},
  {path :'userdetails', component:UserDetailsComponent},
  {path :'productlist', component:ProductCategoryComponent},
  {path :'createeditproduct', component:ProductCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
