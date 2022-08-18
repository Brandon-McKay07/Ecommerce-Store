
import { ProductViewComponent } from './components/products/product-view/product-view.component';

import { UserViewComponent } from './components/users/user-view/user-view.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductCategoriesComponent } from './components/products/product-category/product-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';

import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/order/orders.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'auth' , component:AuthComponent},
  {path:'contactus' , component:ContactusComponent},
  {path:'about' , component:AboutComponent},
  {path:'products' , children: [
    { path :'', component: ProductsComponent },
    { path :'create', component: ProductCreateComponent },
    { path :'view', component: ProductViewComponent },
    { path :'categories', component: ProductCategoriesComponent },
  ]},
  {path:'users' , children: [
    { path :'', component: UsersComponent },
    { path :'create', component: UserCreateComponent },
    { path :'view', component: UserViewComponent },
  ]},
  {path:'orders' , component: OrdersComponent},
  {path: 'shipments', component: ShipmentsComponent},
  {path: 'payments', component: PaymentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
