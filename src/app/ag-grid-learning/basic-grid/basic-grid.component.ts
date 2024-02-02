import { Component } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss']
})
export class BasicGridComponent {

  defaultColDef: any;
  // rowData1: any = [];
  

  constructor() {
    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      pagination:true
    };
  }

  // Row Data: The data to be displayed.
  rowData1 = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // rowData1 = [
  //   { make: "Tesla", model: "Model Y", price: 64950  },
  //   { make: "Ford", model: "F-Series", price: 33850 },
  //   { make: "Toyota", model: "Corolla", price: 29600 }
  // ];


  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { 
      headerName: "Make",
      field: "make",
      filter: true,
    },
    { 
      headerName: "Model",
      field: "model" 
    },
    { 
      headerName: "Price",
      field: "price"
    },
    { 
      headerName: "Electric",
      field: "electric"
    }
  ];
}
