import { ProductsModule } from './components/products/products.module';
import { UsersModule } from './components/users/users.module';
import { OrdersModule } from './components/orders/orders.module';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdersComponent } from './components/orders/orders.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { UserListComponent } from './components/navbar/user-list/user-list.component';
import { EditUserComponent } from './components/navbar/create/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/navbar/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    NavbarComponent,
    SideNavbarComponent,
    MainComponent,
    HomeComponent,
    FooterComponent,
    OrdersComponent,
    AuthComponent,
    NotFoundComponent,
    AboutComponent,
    ContactusComponent,
    ShipmentsComponent,
    PaymentsComponent,
    UserListComponent,
    EditUserComponent,
    UserDetailsComponent,
    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    UsersModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
