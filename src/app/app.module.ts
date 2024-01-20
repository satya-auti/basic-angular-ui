import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from "./angular-material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatButtonModule } from "@angular/material/button"
// import { MatIconModule }   from "@angular/material/icon"
// import { MatInputModule }  from "@angular/material/input"

// import {
//   MatCardModule,
//   MatInputModule,
//   MatButtonModule
// } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    // MatButtonModule,
    // MatInputModule,
    // MatIconModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
