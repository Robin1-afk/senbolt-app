import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-pos-system',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,SharedModule],
  templateUrl: './pos-system.component.html',
  styleUrl: './pos-system.component.scss'
})
export class PosSystemComponent {
  activeCategory: string = '*'; // Default category to show all items

  // Categories and their respective data
  categories = [
    { name: 'All Menu', filter: '*', image: './assets/images/pos-system/1.png', items: 43 },
    { name: 'Pizza', filter: 'pizza', image: './assets/images/pos-system/2.png', items: 80 },
    { name: 'Burger', filter: 'Classic Burgers', image: './assets/images/pos-system/3.png', items: 36 },
    { name: 'Waffle', filter: 'waffle', image: './assets/images/pos-system/4.png', items: 25 },
    { name: 'Ice Cream', filter: 'Specialty Flavors', image: './assets/images/pos-system/5.png', items: 58 },
    { name: 'Coffee', filter: 'Espresso Beverages', image: './assets/images/pos-system/6.png', items: 38 },
    { name: 'Cupcakes', filter: 'Cupcake Creations', image: './assets/images/pos-system/7.png', items: 38 },
  ];

  // Items data
  items = [
    { name: 'Classic Cheeseburger', category: 'Classic Burgers', image: './assets/images/pos-system/9.jpg', price: '$78.99' },
    { name: 'Coconut Almond Fudge', category: 'Specialty Flavors',stock:'out-of-stock', image: './assets/images/pos-system/18.jpg', price: '$29.99' },
    { name: 'Cappuccino', category: 'Espresso Beverages' ,stock:'out-of-stock',image: './assets/images/pos-system/17.jpg', price: '$7.99' },
    { name: 'Frosting Choices', category: 'Cupcake Creations', image: './assets/images/pos-system/11.jpg', price: '$19.99' },
    { name: 'Nutella Cupcake', category: 'Cupcake Creations', image: './assets/images/pos-system/12.jpg', price: '$123.99' },
    { name: 'Mediterranean', category: 'pizza', image: './assets/images/pos-system/16.jpg', price: '$2.79' },
    { name: 'Cold Brew Concentrate', category: 'Espresso Beverages', image: './assets/images/pos-system/14.jpg', price: '$1.29' },
    { name: 'Blue Cheese Burger', category: 'Classic Burgers', image: './assets/images/pos-system/15.jpg', price: '$24.99' },
    { name: 'Apple Cinnamon Waffle', category: 'waffle', image: './assets/images/pos-system/19.jpg', price: '$24.99' },
    { name: 'Pesto Delight', category: 'pizza', image: './assets/images/pos-system/10.jpg', price: '$24.99' },
    { name: 'Cookie Dough Sundae', category: 'Specialty Flavors', image: './assets/images/pos-system/8.jpg', price: '$24.99' },
    { name: 'Americano', category: 'Espresso Beverages', image: './assets/images/pos-system/13.jpg', price: '$24.99' },
  ];

  products = [
    {
      name: 'Cappuccino',
      category: 'Espresso Beverages',
      price: '$517',
      orders: '2.7K Orders',
      image: './assets/images/pos-system/17.jpg',
      discount: null
    },
    {
      name: 'Cheese Burger',
      category: 'Gourmet Burgers',
      price: '$564',
      orders: '1,758 Orders',
      image: './assets/images/pos-system/15.jpg',
      discount: '15% Off',
      discountClass: 'bg-info/10 !text-info'
    },
    {
      name: 'Cinnamon Waffle',
      category: 'Specialty Waffles',
      price: '$24.89',
      orders: '894 Orders',
      image: './assets/images/pos-system/19.jpg',
      discount: null
    },
    {
      name: 'Mediterranean',
      category: 'Special Pizza',
      price: '$2.7',
      orders: '865 Orders',
      image: './assets/images/pos-system/16.jpg',
      discount: '10% Off',
      discountClass: 'bg-primarytint1color/10 !text-primarytint1color'
    },
    {
      name: 'Classic Burger',
      category: 'Gourmet Burgers',
      price: '$564',
      orders: '1,758 Orders',
      image: './assets/images/pos-system/9.jpg',
      discount: '10% Off',
      discountClass: 'bg-primarytint3color/10 !text-primarytint3color'
    },
    {
      name: 'Almond Fudge',
      category: 'Specialty Flavors',
      price: '$89',
      orders: '789 Orders',
      image: './assets/images/pos-system/18.jpg',
      discount: '30% Off',
      discountClass: 'bg-success/10 !text-success'
    }
  ];

  Offcanvasitems=[
    {
      id:'1',
      src:"./assets/images/pos-system/17.jpg",
      name:"Cappuccino",
      type:"Espresso Beverages",
      quantity:"2"
    },
    {
      id:'2',
      src:"./assets/images/pos-system/11.jpg",
      name:"Frosting",
      type:"Cupcakes",
      quantity:"2"
    },
    {
      id:'3',
      src:"./assets/images/pos-system/9.jpg",
      name:"Cheeseburger",
      type:"Burger",
      quantity:"2"
    },
    {
      id:'4',
      src:"./assets/images/pos-system/16.jpg",
      name:"Cheese Pizza",
      type:"Pizza",
      quantity:"2"
    },
    {
      id:'5',
      src:"./assets/images/pos-system/10.jpg",
      name:"Normal Pizza",
      type:"Pizza",
      quantity:"2"
    }
  ]

  // Method to filter items by category
  filterCategory(category: string) {
    this.activeCategory = category;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;     
    }
  }

  increaseQuantity(item: any) {
    item.quantity++; 
  }

  cartItemCount: number = 5;
  isCartEmpty: boolean = false;
  handleCardClick(event: MouseEvent) {
    // Prevent the click event from propagating to the container
    event.stopPropagation();
  }

  removeRow(id: string) {
    const rowElement = document.getElementById(id);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }
}
