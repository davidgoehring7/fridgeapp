import { Component } from '@angular/core';

@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html'
})
export class InventoryComponent {
    columnDefs;
    rowData;

    constructor() {
        this.columnDefs = [
            { headerName: "Make", field: "make", width: 300 },
            { headerName: "Model", field: "model", width: 300 },
            { headerName: "Price", field: "price", width: 300 }
        ];

        this.rowData = [
            { make: "Toyota", model: "Cecelia", price: 35000},
            { make: "Ford", model: "Monaco", price: 31200 },
            { make: "Porsche", model: "Boxer", price: 23440 }
        ];
    }
}
