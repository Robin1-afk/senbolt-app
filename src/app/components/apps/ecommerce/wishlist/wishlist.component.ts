import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/29.png" ,
    class:"box card-style-3",
    name:"Ladies' Slim Bag",
    status:"In Stock",
    bg:"success",
    offerprice:"$251",
    price:'$399',
    bg1:"primary1",
    offer:"30% Off",
    ratings:"23",
  },
  {
    id:'2',
    img:"./assets/images/ecommerce/png/30.png" ,
    class:"card custom-card card-style-3",
    name:"Wireless Headphones",
    status:"Only 4 Left",
    bg:"danger",
    offerprice:"$874",
    price:'$458',
    bg1:"primary1",
    offer:"50% Off",
    ratings:"114"
  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/32.png" ,
    class:"card custom-card card-style-3",
    name:"Voluptatem Alarm Clock",
    status:"In Stock",
    bg:"success",
    offerprice:"$48",
    price:'$57',
    bg1:"primary1",
    offer:"10% Off",
    ratings:"15"
  },
  {
    id:'4',
    img:"./assets/images/ecommerce/png/15.png" ,
    class:"card custom-card card-style-3",
    name:"Sports Shoes",
    status:"In Stock",
    bg:"success",
    offerprice:"$1,578",
    price:'$1,877',
    bg1:"primary1",
    offer:"25% Off",
    ratings:"15"
  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/28.png" ,
    class:"card custom-card card-style-3 filter-bw",
    name:"Lightweight Sneakers",
    status:"Out of Stock",
    bg:"danger",
    offerprice:"$1,578",
    price:'$1,877',
    bg1:"primary1",
    offer:"25% Off",
    ratings:"15",
     cardClass:'grayscale'
  },
  {
    id:'6',
    img:"./assets/images/ecommerce/png/6.png" ,
    class:"card custom-card card-style-3",
    name:"Chair with Cushion",
    status:"In Stock",
    bg:"success",
    offerprice:"$687",
    price:'$874',
    bg1:"primary1",
    offer:"14% Off",
    ratings:"27"
  },

]
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule,RouterModule,CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  items=DATA

  ConformAlert(id:string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Remove',
      confirmButtonColor: '#0162e8',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
          
        });
        const data = this.items.filter((x: { id: string }) => x.id !== id);
        this.items = data;
         Swal.fire("Deleted!", "Your imaginary file has been deleted!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire({
        //   title: 'Cancelled!',
        //   text: 'Your imaginary file is safe :)',
        //   icon: 'error',
        //   confirmButtonColor: '#0162e8',
        // });
      }
    });

     }
 
  Clear = () => {
    this.items = [];
  };
}
