import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { SharedModule } from '../../../../shared/shared.module';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [
    SharedModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule
],
  templateUrl: './quill-editor.component.html',
  styleUrl: './quill-editor.component.scss',
})
export class QuillEditorComponent {
  editordoc = jsonDoc;

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

  

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  // Angular Editor
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
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
}