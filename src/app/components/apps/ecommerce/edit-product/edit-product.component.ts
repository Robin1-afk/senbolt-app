import { Component, ViewChild } from '@angular/core';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FilePondModule } from 'ngx-filepond';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FilePondOptions } from 'filepond';
import flatpickr from 'flatpickr';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [SharedModule,FilePondModule,FormsModule,SpkFlatpickrComponent,AngularEditorModule,HttpClientModule,
    FlatpickrModule,ReactiveFormsModule,NgSelectModule,AngularEditorModule,SpkNgSelectComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  selectedTags=['Relaxed','Plain']
  selectedColors=['Blue']
  ngOnInit(): void {
        this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#publish-date', this.flatpickrOptions);
}
//angular Editor
htmlContent:string = '';
config1: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '13rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...', 
  translate: 'no',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Arial',
  customClasses: [
    {
      name: "quote",
      class: "quote",
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: "titleText",
      class: "titleText",
      tag: "h1",
    },
  ]
};

  flatpickrOptions: any = {
    inline: true,
  };

  @ViewChild('.product-Images') myPond!: EditProductComponent
  @ViewChild('.product-documents') image!: EditProductComponent
  pondOptions: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drag & Drop your files or Browse'   
  }

  pondFiles: FilePondOptions["files"] = [
   
  ]

  pondHandleInit() {
  }
  pondHandleInit1() {
  }
  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }

 Categories=[
  {label:'Clothing',value:1},
  {label:'Footwear',value:2},
  {label:'Accesories',value:3},
  {label:'Grooming',value:4},
  {label:'Watches',value:5},
  {label:'Ethnic & Festive',value:6},
  {label:'Jewellery',value:7},
  {label:'Toys & Babycare',value:8},
  {label:'Festive Gifts',value:9},
  {label:'Kitchen',value:10},
  {label:'Dining',value:11},
  {label:'Home Decors',value:12},
  {label:'Stationery',value:13},
 ]
 Gender=[
  {label:'All',value:1},
  {label:'Male',value:2},
  {label:'Female',value:3},
  {label:'Others',value:4},
 ]
 Size=[
  {label:'Extra Small',value:1},
  {label:'Small',value:2},
  {label:'Medium',value:3},
  {label:'Large',value:4},
  {label:'Extra Large',value:5},
 ]
 Brand=[
  {label:'Armani',value:1},
  {label:'Lacoste',value:2},
  {label:'Puma',value:3},
  {label:'Spykar',value:4},
  {label:'Mufti',value:5},
  {label:'Home Town',value:4},
  {label:'Arrabi',value:5},
 ]
 selectedColor=[7]
 Color= [
  {label:'White',value:1},
  {label:'Black',value:2},
  {label:'Red',value:3},
  {label:'Orange',value:4},
  {label:'Yellow',value:5},
  {label:'Green',value:6},
  {label:'Blue',value:7},
  {label:'Pink',value:8},
  {label:'Purple',value:9},
 ];
 published=[
  {label:'Select',value:1},
  {label:'Published',value:2},
  {label:'Scheduled',value:3},
 ]
 Tags=[
  {label:"Relaxed",value:1},
  {label:"Solid",value:2},
  {label:"Washed",value:3},
  {label:"Plain",value:4},

]
Tags1=[4,1]
Availability=[
  {label:"In Stock",value:1},
  {label:"Out Of Stock",value:2},

]
}
