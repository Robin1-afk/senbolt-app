import { Component,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import jsonDoc from '../../../../shared/data/editor';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-createblog',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,SpkFlatpickrComponent,
    NgxEditorModule,FilePondModule,FlatpickrModule,SpkNgSelectComponent],
  providers: [FlatpickrDefaults],
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.scss'
})
export class CreateblogComponent {
  
 
  ngOnInit(): void {
    this.editor = new Editor();
  }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });
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
  BlogCategory=[
    {label:"Select Category",value:1},
    {label:"Nature",value:2},
    {label:"Sports",value:3},
    {label:"Food",value:4},
    {label:"Travel",value:5},
    {label:"Fashion",value:6},
    {label:"Beauty",value:7},
  ]
  Publish=[
    {label:"Top Blog",value:2},
    {label:"Blogger",value:3},
    {label:"Adventure",value:4},
    {label:"Landscape",value:5},
  ]
  Status=[
    {label:"Select",value:2},
    {label:"Published",value:3},
    {label:"Hold",value:4},
  ]
  selectedTags=[2,5]
}
