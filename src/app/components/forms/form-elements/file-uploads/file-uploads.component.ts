import { Component, ViewChild } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/forms'
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface, 
  DropzoneModule,
  DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@Component({
  selector: 'app-file-uploads',
  standalone: true,
  imports: [SharedModule,FilePondModule,DropzoneModule],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }],
  templateUrl: './file-uploads.component.html',
  styleUrl: './file-uploads.component.scss'
})
export class FileUploadsComponent {
  prismCode = prismCodeData;
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  pondOptions1: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
    stylePanelLayout: 'circle' 
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
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  constructor() {}

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? 0 : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;
  }

  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
  }

  public onUploadError(args: any): void {
  }

  public onUploadSuccess(args: any): void {
  }

  files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
}
