import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationRoutingModule } from './authentication-routing.module';
// import {
//   MatCardModule,
//   MatInputModule,
//   MatButtonModule
// } from '@angular/material';

import { MatButtonModule } from "@angular/material/button"
import { MatIconModule }   from "@angular/material/icon"
import { MatInputModule }  from "@angular/material/input"
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    AngularMaterialModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    AngularMaterialModule
  ],
})
export class AuthenticationModule { }
