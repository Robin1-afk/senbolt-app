import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/30.png" ,
    product:'Wireless Headphones',
    type:'SoundWave',
    category:"Electronics",
    price:'$1,299',
    stock:'283',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/4.jpg",
    seller:'Mayor Kelly',
    date:'24,Nov 2023 - 04:42PM',
    checked:false,
  
  },
  {
    id:'2',
    img:"./assets/images/ecommerce/png/14.png" ,
    product:'Elegant Flower Pot',
    type:'Serene Garden',
    category:"Ceramic",
    price:'$799',
    stock:'98',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/15.jpg",
    seller:'Andrew Garfield',
    date:'18,Nov 2023 - 06:53AM',
    checked:false,
  
  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/31.png" ,
    product:'Wireless Earbuds',
    type:'AirPods Max',
    category:"Electronics",
    price:'$2,499',
    stock:'194',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/11.jpg",
    seller:'Simon Cowel',
    checked:false,
    date:'12,Aug 2023 - 11:21AM',
  },
  {
    id:'4',
    img:"./assets/images/ecommerce/png/12.png" ,
    product:"Kids' Party Wear Frock",
    type:'Twinkle Twirl',
    category:"Fashion Wear",
    price:'$899',
    stock:'267',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/8.jpg",
    seller:'Mirinda Hers',
    checked:false,
    date:'05,Sep 2023 - 10:14AM',
  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/32.png" ,
    product:"Alarm Clock",
    type:'Midest Brand',
    category:"Home Needs",
    price:'$499',
    stock:'143',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/1.jpg",
    seller:'Simon Cowel',
    checked:false,
    date:'18,Nov 2023 - 14:35PM',
  },
  {
    id:'6',
    img:"./assets/images/ecommerce/png/23.png" ,
    product:"Advanced Smartwatch",
    type:'SmartSync 2024',
    category:"Watches",
    price:'$999',
    stock:'365',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/2.jpg",
    seller:'Mirinda Hers',
    checked:false,
    date:'27,Nov 2023 - 05:12AM',
  },
  {
    id:'7',
    img:"./assets/images/ecommerce/png/15.png" ,
    product:"Sport shoe",
    type:'Conit Brand',
    category:"Sports",
    price:'$1,499',
    stock:'257',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/9.jpg",
    seller:'Jhon Trendy',
    checked:false,
    date:'29,Nov 2023 - 16:32PM',
  },

]
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule,CommonModule,RouterModule,SpkReusableTablesComponent,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  lists=DATA
  toggleRowChecked(row: any): void {
    // Check if all rows are selected
    this.allTasksChecked = this.lists.every(row => row.checked);

    // Update the state of the header checkbox accordingly
  }
  handleToggleSelectAll(checked: any) {
    this.lists.forEach(list => list.checked = checked);
    this.allTasksChecked = checked;
  }

  Remove(id: any) {
    var Outputdata = this.lists.filter((x) => {
      return x.id != id;
    });
    this.lists = Outputdata;
  }

  Clear = () => {
    this.lists = [];
  };
  allTasksChecked: boolean = false;
  tasks: any[] = [/* your tasks here */];

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  productlistColumns=[
    {header:"Product",field:"Product"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},
    {header:"Stock",field:"Stock"},
    {header:"Status",field:"Status"},
    {header:"Seller",field:"Seller"},
    {header:"Published",field:"Published"},
    {header:"Action",field:"Action"},



  ]
}
