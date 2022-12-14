import { ProductsModule } from './components/products/products.module';
import { UsersModule } from './components/users/users.module';
import { OrdersModule } from './components/order/orders.module';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { EditUserComponent } from './components/navbar/create/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/navbar/user-details/user-details.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    NavbarComponent,
    SideNavbarComponent,
   
    HomeComponent,
    FooterComponent,
    
    AuthComponent,
    NotFoundComponent,
    AboutComponent,
    ContactusComponent,
    ShipmentsComponent,
    PaymentsComponent,
    UserListComponent,
    EditUserComponent,
    UserDetailsComponent,
    
    CreateAccountComponent,
    LogoutComponent,
    
    
  ],

  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OrdersModule,
    UsersModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
