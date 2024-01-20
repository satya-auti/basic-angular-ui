import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-rounting.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    GridComponent,
    CardsComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule
  ]
})
export class LayoutModule { }
