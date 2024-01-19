import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule
  ]
})
export class AuthenticationModule { }
