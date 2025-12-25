import { Component } from '@angular/core';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-invoicedetails',
  standalone: true,
  imports: [SharedModule,SpkReusableTablesComponent],
  templateUrl: './invoicedetails.component.html',
  styleUrl: './invoicedetails.component.scss'
})
export class InvoicedetailsComponent {
  products= [
    { name: 'Cresta & Co (Headphones)', description: 'Noise-cancelling technology, Bluetooth connectivity', quantity: 3, price: 84, total: 251 },
    { name: 'Zephyr & Sons (Sneakers)', description: 'Lightweight mesh upper, durable rubber outsole.', quantity: 2, price: 503, total: 503 },
    { name: 'Nova & Nexus (Watch)', description: 'Scratch-resistant sapphire crystal', quantity: 1, price: 689, total: 689 },
    { name: 'Everglow & Essentials (Skincare Set)', description: 'Complete daily regimen', quantity: 3, price: 486, total: 939 },
    { name: 'Azure & Attire (Dress)', description: 'Flowy chiffon fabric, adjustable', quantity: 2, price: 648, total: 648 },
];

// Sample calculations
subTotal: number = this.products.reduce((acc, product) => acc + product.total, 0);
availDiscount: number = 15.58; // Replace with actual discount calculation
couponDiscount: number = 987.56; // Replace with actual coupon calculation
vat: number = 654.69; // Replace with actual VAT calculation
dueTillDate: number = 1; // Replace with actual due amount
total: number = this.subTotal - this.availDiscount - this.couponDiscount + this.vat + this.dueTillDate;
invoiceColumns=[
  {header:"BRAND NAME",field:"BRAND NAME"},
  {header:"DESCRIPTION",field:"DESCRIPTION"},
  {header:"QUANTITY",field:"QUANTITY"},
  {header:"PRICE PER UNIT",field:"PRICE PER UNIT"},
  {header:"TOTAL",field:"TOTAL"},

]
}

