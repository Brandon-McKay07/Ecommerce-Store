import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent, } from './register/register.component';
import { LoginComponent, } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    
    ForgotPasswordComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
