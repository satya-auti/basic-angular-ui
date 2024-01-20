import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "sidebar",
    component: SidebarComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "header",
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
