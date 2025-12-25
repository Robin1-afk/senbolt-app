import { Component } from '@angular/core';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
const DATA=[
  {
    id:"#1172553",
    img:"./assets/images/ecommerce/png/28.png" ,
    name:'Lightweight Sneakers',
    src1:"./assets/images/faces/4.jpg",
    customer:'Violeta Tilly',
    contact:'(222) 111 - 57840',
    date:'11 Jan 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$177.00",
  },
  {
    id:"#1172555",
    img:"./assets/images/ecommerce/png/12.png" ,
    name:"Kids' Party Wear Frock",
    src1:"./assets/images/faces/15.jpg",
    customer:'Danny Raj',
    contact:'(222) 687-9954',
    date:'23 Jan 2024',
    bg:"warning",
    status:"Pending",
    payment:"Online Payment",
    price:"$153.00",
  },
  {
    id:"#1202513",
    img:"./assets/images/ecommerce/png/29.png" ,
    name:"Ladies' Slim Bag",
    src1:"./assets/images/faces/8.jpg",
    customer:'Sissera William',
    contact:'(222) 987-1323',
    date:'19 Feb 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$203.00",
  },
  {
    id:"#1202510",
    img:"./assets/images/ecommerce/png/14.png" ,
    name:"Elegant Flower Pot",
    src1:"./assets/images/faces/11.jpg",
    customer:'Red Stark',
    contact:'(222) 447-4518',
    date:' 06 Mar 2024',
    bg:"danger",
    status:"Cancelled",
    payment:"Online Payment",
    price:"$211.00",
  },
  {
    id:"#1222516",
    img:"./assets/images/ecommerce/png/11.png" ,
    name:"Trendy Sunglasses",
    src1:"./assets/images/faces/1.jpg",
    customer:'Henry Milo',
    contact:'(222) 666-8080',
    date:'18 Mar 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$265.00",
  },
  {
    id:"#1202513",
    img:"./assets/images/ecommerce/png/13.png" ,
    name:"Sleek Modern Chair",
    src1:"./assets/images/faces/8.jpg",
    customer:'Sissera William',
    contact:'(222) 144-1423',
    date:'19 Feb 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$203.00",
  },
  {
    id:"#1202510",
    img:"./assets/images/ecommerce/png/30.png" ,
    name:"Wireless Headphones",
    src1:"./assets/images/faces/11.jpg",
    customer:'Red Stark',
    contact:'(222) 447-4515',
    date:' 06 Mar 2024',
    bg:"danger",
    status:"Cancelled",
    payment:"Online Payment",
    price:"$211.00",
  },
  {
    id:"#1222516",
    img:"./assets/images/ecommerce/png/31.png" ,
    name:"Wireless Earbuds",
    src1:"./assets/images/faces/1.jpg",
    customer:'Henry Milo',
    contact:'(222) 887-1323',
    date:'18 Mar 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$265.00",
  },

]
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SpkReusableTablesComponent,RouterModule,SharedModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders=DATA;
  remove(contact:string){
    const data = this.orders.filter((x: { contact: string }) => {
      return x.contact != contact;
  
    })
    this.orders = data;
}
ordersColumn=[
  {header:"Order Id",field:"Order Id"},
  {header:"Product",field:"Product"},
  {header:"Customer",field:"Customer"},
  {header:"Mobile Number",field:"Mobile Number"},
  {header:"Ordered Date",field:"Ordered Date"},
  {header:"Status",field:"Status"},
  {header:"Payment Mode",field:"Payment Mode"},
  {header:"Cost",field:"Cost"},
  {header:"Action",field:"Action"},
]
}
