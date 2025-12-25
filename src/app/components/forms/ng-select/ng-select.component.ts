import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-ng-select',
  standalone: true,
  imports: [SharedModule,NgSelectModule,CommonModule,FormsModule,SpkNgSelectComponent],
  templateUrl: './ng-select.component.html',
  styleUrl: './ng-select.component.scss'
})

  export class NgSelectComponent {
    disabled = false;
    Selection = [
      { value: 1, label: 'Selection-1' },
      { value: 2, label: 'Selection-2' },
      { value: 3, label: 'Selection-3' },
      { value: 3, label: 'Selection-4' },
      { value: 3, label: 'Selection-5' }
  ];
  singleSelection = [
    { value: 1, label: 'Texas' },
    { value: 2, label: 'Georgia' },
    { value: 3, label: 'California' },
    { value: 3, label: 'Washington D.C' },
    { value: 3, label: 'Virginia' }
];
multipleSelection = [
  { value: 1, label: 'Appple' },
  { value: 2, label: 'Mango' },
  { value: 3, label: 'Orange' },
  { value: 3, label: 'Guava' },
  { value: 3, label: 'Pineapple' }
];
      //Templating
      options = [
        {
          value: "Andrew",
          label: "Andrew",
          image: "./assets/images/faces/1.jpg"
        },
        {
          value: "Maya",
          label: "Maya",
          image: "./assets/images/faces/2.jpg"
        },
        {
          value: "BrodusAxel",
          label: "BrodusAxel",
          image: "./assets/images/faces/3.jpg"
        },
        {
          value: "Goldhens",
          label: "Goldhens",
          image: "./assets/images/faces/4.jpg"
        },
        {
          value: "Angelina",
          label: "Angelina",
          image: "./assets/images/faces/5.jpg"
        }
      ];
    
      defaultValue: any; // Initialize as needed
    
      onValueChange(event: any) {
        console.log(event); // Handle value changes as needed
      }
  cities1 = [
  
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-3.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
  ];
  cities = [
    { name: 'New York', avatar: './assets/images/faces/5.jpg' },
    { name: 'London', avatar: 'https://via.placeholder.com/15x15.png?text=LD' },
    { name: 'Paris', avatar: 'https://via.placeholder.com/15x15.png?text=PR' }
  ];
  selectedCity2: any = null;

  onCityChange(city: any): void {
    console.log('Selected city:', city);
  }
  selectedCity = this.options[0].label;
  selectedCity1 = this.cities1[0].name;
  people$!: Observable<any[]>;

 

    constructor() {
    }

    ngOnInit() {
        // this.people$ = this.dataService.getPeople('');
    }
    selectedPersonId:any=[1]
    selectedPerson:any=['Selection-1']

    enableSelect(): void {
      this.disable = false;
    }
  
    disableSelect(): void {
      this.disable = true;
    }
    disable:any;

    
  customer:any;
  // public onSelectAll() {
  //   const selected = this.cities.map(item => item.id);
  //   this.customer = selected;
  // }

  public onClearAll() {
    this.customer = [];
  }
  multipleSelect=[
    {label:"Multiple-1",value:1},
    {label:"Multiple-2",value:2},
    {label:"Multiple-3",value:3},
    {label:"Multiple-4",value:4},
    {label:"Multiple-5",value:5},
  ]
  selectedMulti=[1]
  onCitySelected(selected: any) {
    this.selectedCity = selected;
    // You can perform additional actions based on the selected city here
  }
}