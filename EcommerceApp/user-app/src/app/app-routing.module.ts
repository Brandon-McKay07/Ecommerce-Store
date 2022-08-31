import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { NotFoundComponent } from './../../../admin-app/src/app/components/not-found/not-found.component';
import { ShoppingCartComponent } from './components/products/shopping-cart/shopping-cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewComponent } from './components/products/view/view.component';
import { WishlistComponent } from './components/products/wishlist/wishlist.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'orders' , component:OrdersComponent},
  {path:'change-password' , component:ChangePasswordComponent},
  
  
  
  
  {path:'products' , children: [
    { path :'', component: ProductsComponent },
    {path:'shopping-cart' , component:ShoppingCartComponent},
    { path :'checkout', component: CheckoutComponent },
    { path :'view', component: ViewComponent },
    { path :'wishlist', component: WishlistComponent },
  ]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
