import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import flatpickr from 'flatpickr';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
  
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FilePondModule,FormsModule,ReactiveFormsModule,SpkFlatpickrComponent,SpkNgSelectComponent,
    DropzoneModule,AngularEditorModule,HttpClientModule,FlatpickrModule],
    providers: [FlatpickrDefaults],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  
  pondFiles: FilePond.FilePondOptions["files"] = [
   
  ];
  
  pondHandleInit() {
  
  }
  
  pondHandleAddFile(event: any) {
    
  }
  
  pondHandleActivateFile(event: any) {
   
  }
  
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
  // flatpickrOptions: FlatpickrOptions;
  
  constructor() {}
  
  ngOnInit() {
   
  
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#inlinetime', this.flatpickrOptions);
  
      this.flatpickrOptions = {
        enableTime: true,
        dateFormat: 'Y-m-d H:i', // Specify the format you want
        defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
      };
  
      flatpickr('#pretime', this.flatpickrOptions);
  }
  
  
  Status=[
    {label:'Inprogress',value:1},
    {label:'On-hold',value:2},
    {label:'Completed',value:3},
  ]
  Priority=[
    {label:'High',value:1},
    {label:'Medium',value:2},
    {label:'Low',value:3},
  ]
  tags=[
    {value:1,label:'Kiara advain'},
    {value:2,label:'Hercules Jhon'},
    {value:3,label:'Mayor Kim'},
    {value:4,label:'Alexa Biss'},
    {value:5,label:'Karley Dia'},
    {value:6,label:'Kim Jong'},
    {value:7,label:'Angelina May'},
    {value:8,label:'Elizabeth'},
    {value:9,label:'Phillip Jhon'},
    {value:10,label:'Alex Carey'},
  ]
  selectedTags=[4,7,9];
  selectedTags1=[{label:'Marketing',value:1},
                  {label:'Sales',value:2},
                  {label: 'Development',value:4},
                  {label: 'Design', value:5},
                  {label:'Research',value:6}
                ];
  
  selected=[1,2,4,5,6]
  }
  