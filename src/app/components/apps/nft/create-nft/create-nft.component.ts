import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../../shared/shared.module';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-create-nft',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,DropzoneModule,FilePondModule,SpkNgSelectComponent],
  templateUrl: './create-nft.component.html',
  styleUrl: './create-nft.component.scss'
})
export class CreateNftComponent {
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
  dropzoneOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  pondHandleInit() {
  }
  
  pondHandleAddFile(event: any) {
  }
  
  pondHandleActivateFile(event: any) {
  }
  Royality=[
    {label:'Choose Royalities',value:1},
    {label:'Flat Royalty',value:2},
    {label:'Graduated Royalty',value:3},
    {label:'Tiered Royalty',value:4},
    {label:'Time-Limited Royalty',value:5},
    {label:'Customized Royalty',value:6},
  ]
  cardData1=[
    {
      id:1,
      avatarSize:"sm",
      bodyClass:"box-body",
      imageClass:"overflow-hidden rounded mb-2",
      titleClass:"d-flex align-items-start gap-2",
      time1:"04hrs : 24m : 38s",
      title:"Abstract Digital Art",
      image:"./assets/images/nft-images/2.jpg",
      image1:"./assets/images/faces/14.jpg",
      name:"Manistics NFT",
      value:"0.015ETH",
      mail:"@manistics454",
      likes1:"1.43k"
    },
  ]
}
