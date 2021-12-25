import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
