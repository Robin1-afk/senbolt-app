
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-createinvoice',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,SpkFlatpickrComponent,
    ReactiveFormsModule,FlatpickrModule,SpkReusableTablesComponent,SpkNgSelectComponent],
  providers:[FlatpickrDefaults],
  templateUrl: './createinvoice.component.html',
  styleUrl: './createinvoice.component.scss'
})
export class CreateinvoiceComponent {
  quantity: number = 1;
  product: number = 1;
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
  }
  createinvoiceColumns=[
    {header:"PRODUCT NAME",field:"PRODUCT NAME"},
    {header:"DESCRIPTION",field:"DESCRIPTION"},
    {header:"QUANTITY",field:"QUANTITY"},
    {header:"PRICE PER UNIT",field:"PRICE PER UNIT"},
    {header:"TOTAL",field:"TOTAL"},
    {header:"ACTION",field:"ACTION"},
  ]
  Currency=[
    {label:"Select Currency",value:1},
    {label:"USD - (United States Dollar)",value:2},
    {label:"BHD - (Bahraini Dinar)",value:3},
    {label:"KWD - (Kuwaiti Dinar)",value:4},
    {label:"CHF - (Swiss Franc)",value:5},
  ]
}
