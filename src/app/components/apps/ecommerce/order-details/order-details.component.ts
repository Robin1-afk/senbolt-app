
import { Component } from '@angular/core';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';

const DATA:any=[
  {  
   
    img:"./assets/images/ecommerce/png/28.png" ,
    name:'Light weight Sneakers',
    Size:"Men's 10",
    Color:'Light Pink',
    Id:'SPK1218153635',
    Price:'1249',
    Quantity:1, 
    empty:true,
    offer:false
  },
  {  
   
    img:"./assets/images/ecommerce/png/12.png" ,
    name:"Kids' Party Wear Frock",
    Size:'6-7 Years',
    Color:'Gold',
    Id:'SPK3789423789',
    Price:'499',
    Quantity:2, 
    bg:"success",
    status:"In Offer",
    empty:false,
    offer:true
  },
  {  
  
    img:"./assets/images/ecommerce/png/29.png" ,
    name:"Ladies' Slim Bag",
    Size:'Small',
    Color:'Red',
    bg:"primary",
    status:"32% Off",
    Id:'SPK1120324532',
    Price:'799',
    Quantity:1, 
    empty:false,
    offer:false
  },
  {  
  
    img:"./assets/images/ecommerce/png/14.png" ,
    name:"Elegant Flower Pot",
    Size:'33 mm',
    Color:'Brown',
    Id:'SPK1218153635',
    Price:'1249',
    Quantity:1, 
    empty:false,
    offer:false
  },
  {  
  
    img:"./assets/images/ecommerce/png/11.png" ,
    name:"Trendy Sunglasses",
    Size:'9',
    Color:'Light Gray',
    bg:"success",
    status:"In Offer",
    Id:'SPK3789423789',
    Price:'499',
    Quantity:2, 
    empty:false,
    offer:false
  },
  {  
  
    img:"./assets/images/ecommerce/png/13.png" ,
    name:"Sleek Modern Chair",
    Size:'small',
    Color:'Yellow',
    bg:"primary",
    status:"32% Off",
    Id:'SPK1120324532',
    Price:'799',
    Quantity:1, 
    empty:false,
    offer:false
  }
]
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [SpkReusableTablesComponent,SharedModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  OrderDetails=DATA
  constructor() {
}
orderColumn=[
  {header:"Item",field:"Item"},
  {header:"Tracking ID",field:"Tracking ID"},
  {header:"Price",field:"Price"},
  {header:"Quantity",field:"Quantity"},
  {header:"Total Price",field:"Total Price"},
]
cartSummary = [
  { label: 'Total Items', value: '06' },
  { label: 'Applied Coupon', value: '<span class="badge bg-success-transparent">SP0578A</span>' },
  { label: 'Delivery Fees', value: '<span class="text-danger">+$29</span>' },
  { label: 'Sub Total', value: '<span class="fs-14 fw-medium">$3,799</span>' },
  { label: 'Total Price', value: '<span class="fs-20 fw-semibold">$3,129</span>' }
];
}