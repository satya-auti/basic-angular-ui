import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { AgGridLearningRoutingModule } from './ag-grid-learning-routing.module';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    BasicGridComponent
  ],
  imports: [
    CommonModule,
    AgGridLearningRoutingModule,
    AgGridModule,
  ]
})
export class AgGridLearningModule { }
