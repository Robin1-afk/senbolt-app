import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import Swal from 'sweetalert2';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/1.png" ,
    bg:"primarytint3color ",
    discount:"20 OFF",
    name:'Compact Laptop ',
    size:'Compact',
    color:'Grey',
    bg1:"success",
    status:"In Stock",
    total:'$554',
    price:" $554",
    quantity:'1',
  },
  {
   id:'2',
    img:"./assets/images/ecommerce/png/7.png" ,
    name:'Bespoke Hand Bag ',
    size:'Medium',
    color:'Deep Lavendar',
    bg1:"danger",
    status:"out of Stock",
    price:" $187",
    total:'$374',
    quantity:'2',

  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/15.png" ,
    name:'StrideMax Shoes ',
    bg:"info",
    discount:"12 OFF",
    size:'44mm dial',
    color:'Bronze',
    bg1:"success",
    status:"In Stock",
    price:" $503",
    total:'$1,006',
    quantity:'2',

  },
  {
    id:'4',
    img:"./assets/images/ecommerce/png/12.png" ,
    name:"Kids' Party Wear Frock",
    size:'Medium',
    color:'Gold',
    bg1:"danger",
    status:"out of Stock",
    price:" $248",
    total:'$248',
    quantity:'1',

  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/11.png" ,
    name:"Trendy Sunglasses",
    size:'Large',
    color:'Black',
    bg1:"success",
    status:"In Stock",
    price:" $1,299",
    total:' $1,299',
    quantity:'1',

  }
]

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule,RouterModule,FormsModule,ReactiveFormsModule,SpkReusableTablesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor() {}
  products = DATA;
  
  isCartEmpty(): boolean {
    return this.products.length === 0;
  }

  // Method to remove an item from the cart
  removeItem(itemId: string) {
    this.products = this.products.filter((item) => item.id !== itemId);
  }
  confirmAlert(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true, // This shows the Cancel button
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true // Optional: reverses the position of the confirm and cancel buttons
    }).then((result) => {
      if (result.isConfirmed) { // result.isConfirmed is true if "Yes, delete it!" was clicked
        const data = this.products.filter((x: { id: string }) => x.id !== id);
        this.products = data;
        Swal.fire('Deleted!', 'Your item has been deleted!', 'success');
      } else { 
        // User clicked "Cancel" or closed the alert
    
      }
    });
  }
  // Remove(id: any) {
  //   var Outputdata = this.products.filter((x) => {
  //     return x.id != id;
  //   });
  //   this.products = Outputdata;
  // }

  Clear = () => {
    this.products = [];
  };
  
  quantity: number = 1;
  decreaseQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;     
    }
  }

  increaseQuantity(product: any) {
    product.quantity++; 
  }
  cartColumn=[
    {header:"Product Name",field:"product"},
    {header:"Price",field:"price"},
    {header:"Quantity",field:"quantity"},
    {header:"Total",field:"total"},
    {header:"Action",field:"action"},
  ]


}