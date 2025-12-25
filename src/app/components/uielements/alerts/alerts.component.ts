import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import * as PrismCode from '../../../shared/prismData/uielements';
import * as tsCode from '../../../shared/prismData/uielements';
import * as reuseCode from '../../../shared/prismData/uielements';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
interface Alert {
  type: string;
  message: string;
}

interface SolidAlert {
  type: string;
  message: string;
  bg:string;
}
interface OutlineAlert {
  type: string;
  message: string;
  bg:string;
}


export interface Alert1 {
  type: string;
  icon: string; // Make sure 'icon' property is defined
  message: string;
}
export interface Alert2 {
  type: string;
  image: string;
  message: string;
  avatarClass:string
}
export interface Alert3 {
  type: string;
  image: string; 
  avatarClass : string; 
  message: string;
}
const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

const solidRoundedALERTS: Alert[] = [
  {
    type: 'alert-solid-primary !rounded-full',
    message: '  A simple solid rounded primary alert—check it out!',
  },
  {
    type: 'alert-solid-primary1 !rounded-full',
    message: '  A simple solid rounded primary1 alert—check it out!',
  },
  {
    type: 'alert-solid-primary2 !rounded-full',
    message: '  A simple solid rounded primary2 alert—check it out!',
  }, {
    type: 'alert-solid-primary3 !rounded-full',
    message: '  A simple solid rounded primary3 alert—check it out!',
  },
  {
    type: 'alert-solid-secondary !rounded-full',
    message: 'A simple solid rounded secondary alert—check it out!',
  },
  {
    type: 'alert-solid-warning !rounded-full',
    message: '  A simple solid rounded warning alert—check it out!',
  },
  {
    type: 'alert-solid-danger !rounded-full',
    message: 'A simple solid rounded danger alert—check it out!',
  },
];
const solidALERTS: SolidAlert[] = [
  {
    type: 'alert-solid-primary',
    message: ' A simple solid primary alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-secondary ',
    message: 'A simple solid secondary alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-info ',
    message: 'A simple solid info alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-warning ',
    message: 'A simple solid warning alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-success ',
    message: 'A simple solid success alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-danger ',
    message: 'A simple solid danger alert—check it out!',
    bg:''
  },
  {
    type: 'alert-solid-light ',
    message: 'A simple solid light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'alert-solid-dark text-white ',
    message: 'A simple solid dark alert—check it out!',
    bg:'text-dark'
  },
];
const outlineALERTS: OutlineAlert[] = [
  {
    type: 'alert-outline-primary',
    message: 'A simple outline primary alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-info',
    message: 'A simple outline info alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-warning',
    message: 'A simple outline warning alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-success',
    message: 'A simple outline success alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-danger',
    message: 'A simple outline danger alert—check it out!',
    bg:''
  },
  {
    type: 'alert-outline-light',
    message: 'A simple outline light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'alert-outline-dark text-dark',
    message: 'A simple outline dark alert—check it out!',
    bg:'text-dark'
  },
];
const solidShadowsALERTS: Alert[] = [
  {
    type: 'alert-solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-solid-secondary',
    message: ' A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
];
const differentShadowsAlerts: Alert[] = [
  {
    type: 'alert-primary shadow-sm',
    message: 'A simple primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-primary shadow-sm',
    message: 'A simple primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-primary shadow-sm',
    message: 'A simple primary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-secondary shadow-sm',
    message: 'A simple secondary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-secondary shadow-sm',
    message: ' A simple secondary alert with normal shadow—check it out!',
  },
  {
    type: 'alert-secondary shadow-sm',
    message: 'A simple secondary alert with normal shadow—check it out!',
  },
];
const roundedOutlineALERTS: Alert[] = [
  {
    type: 'alert-outline-primary !rounded-full',
    message: ' A simple outline primary alert—check it out!',
  },
  {
    type: 'alert-outline-secondary !rounded-full',
    message: 'A simple outline secondary alert—check it out!',
  },
  {
    type: 'alert-outline-info !rounded-full',
    message: 'A simple outline info alert—check it out!',
  },
  {
    type: 'alert-outline-warning !rounded-full',
    message: 'A simple outline warning alert—check it out!',
  },
];
const roundeDefaultALERTS: Alert[] = [
  {
    type: 'alert-primary !rounded-full',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'alert-secondary !rounded-full',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'alert-info !rounded-full',
    message: 'A simple rounded info alert—check it out!',
  },
  {
    type: 'alert-warning !rounded-full',
    message: 'A simple rounded warning alert—check it out!',
  },
];
const CustomeButtonALERTS: Alert[] = [
  {
    type: 'alert-primary !rounded-full',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'alert-secondary !rounded-full',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'alert-warning !rounded-full',
    message: 'A simple rounded warning alert—check it out!',
  },
  {
    type: 'alert-danger !rounded-full',
    message: 'A simple rounded danger alert—check it out!',
  },
];

const CustomizedButtonALERTS: Alert1[] = [
  {
    type: 'alert-primary svg-primary custom-alert-icon shadow-sm ',
    icon:'<svg  class="fill-primary me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
    message: ' A customized primary alert with an icon ',
    
  },
  {
    type: 'alert-secondary svg-secondary custom-alert-icon shadow-sm',
    message: 'A customized secondary alert with an icon ',
    icon:' <svg class="fill-secondary me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
  },
  {
    type: 'alert-warning svg-warning custom-alert-icon shadow-sm',
    message: ' A customized warning alert with an icon ',
    icon:'<svg class="fill-warning me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
  },
  {
    type: 'alert-danger svg-danger custom-alert-icon shadow-sm',
    message: ' A customized danger alert with an icon ',
    icon:'<svg class="fill-danger me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
  },
];
const CustomizedIconALERTS: Alert1[] = [
  {
    type: 'alert-primary items-center ',
    icon:' <svg class="sm:flex-shrink-0 me-2 fill-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
    message: ' A customized primary alert with an icon ',
    
  },
  {
    type: 'alert-success items-center',
    message: 'A customized success alert with an icon ',
    icon:' <svg class="sm:flex-shrink-0 me-2 fill-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
  },
  {
    type: 'alert-warning items-center',
    message: ' A customized warning alert with an icon ',
    icon:'<svg class="sm:flex-shrink-0 me-2 fill-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'
  },
  {
    type: 'alert-danger items-center',
    message: ' A customized danger alert with an icon ',
    icon:'<svg class="sm:flex-shrink-0 me-2 fill-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'
  },
];
const imageAlerts:Alert2[] = [
  {  type: 'alert-primary alert-img  !rounded-full flex-wrap relative', message: 'A simple primary alert with image—check it out!', image: './assets/images/faces/3.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-secondary alert-img  !rounded-full flex-wrap relative', message: 'A simple secondary alert with image—check it out!', image: './assets/images/faces/5.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-warning alert-img  !rounded-full flex-wrap relative', message: 'A simple warning alert with image—check it out!', image: './assets/images/faces/8.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-danger alert-img  !rounded-full flex-wrap relative', message: 'A simple danger alert with image—check it out!', image: './assets/images/faces/11.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-info alert-img  !rounded-full flex-wrap relative', message: 'A simple info alert with image—check it out!', image: './assets/images/faces/13.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-light alert-img  !rounded-full flex-wrap relative', message: 'A simple light alert with image—check it out!', image: './assets/images/faces/10.jpg',avatarClass: 'avatar-sm avatar-rounded' },
  {  type: 'alert-dark alert-img  !rounded-full flex-wrap relative', message: 'A simple dark alert with image—check it out!', image: './assets/images/faces/15.jpg',avatarClass: 'avatar-sm avatar-rounded' }
];
const imageSizeAlerts = [
  {  type: 'alert-primary alert-img flex-wrap relative', message: 'A simple primary alert with image—check it out!', image: './assets/images/faces/3.jpg', avatarClass: 'avatar-xs' },
  {  type: 'alert-secondary alert-img flex-wrap relative', message: 'A simple secondary alert with image—check it out!', image: './assets/images/faces/5.jpg', avatarClass: 'avatar-sm' },
  {  type: 'alert-warning alert-img flex-wrap relative', message: 'A simple warning alert with image—check it out!', image: './assets/images/faces/8.jpg', avatarClass: '' },
  {  type: 'alert-danger alert-img flex-wrap relative', message: 'A simple danger alert with image—check it out!', image: './assets/images/faces/11.jpg', avatarClass: 'avatar-md' },
  {  type: 'alert-info alert-img flex-wrap relative', message: 'A simple info alert with image—check it out!', image: './assets/images/faces/13.jpg', avatarClass: 'avatar-lg' },
  {  type: 'alert-dark alert-img flex-wrap relative', message: 'A simple dark alert with image—check it out!', image: './assets/images/faces/14.jpg', avatarClass: 'avatar-xl' }
];
const confirmAlerts = [
  {
    type: 'alert-primary custom-alert1',
    title: 'Information',
    message: 'This alert is created to just show the related information.',
    icon: '<svg class="custom-alert-icon fill-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>',
    buttons: [
      { label: 'Decline', type: 'outline-danger' },
      { label: 'Accept', type: 'primary' }
    ]
  },
  {
    type: 'alert-secondary custom-alert1',
    title: 'Confirmed',
    message: 'This alert is created to just show the confirmation message.',
    icon: '<svg class="custom-alert-icon fill-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',
    buttons: [{ label: 'Close', type: 'secondary' }]
  },
  {
    type: 'alert-warning custom-alert1',
    title: 'Warning',
    message: 'This alert is created to just show the warning message.',
    icon: '<svg class="custom-alert-icon fill-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>',
    buttons: [
      { label: 'Back', type: 'outline-secondary' },
      { label: 'Continue', type: 'warning' }
    ]
  },
  {
    type: 'alert-danger custom-alert1',
    title: 'Danger',
    message: 'This alert is created to just show the danger message.',
    icon: '<svg class="custom-alert-icon fill-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>',
    buttons: [{ label: 'Delete', type: 'danger' }]
  }
];
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkAlertsComponent } from '../../../../@spk/reusable-ui-elements/spk-alerts/spk-alerts.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-alerts',
    standalone: true,
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss'],
    imports: [SharedModule, ShowcodeCardComponent,SpkAlertsComponent,CommonModule]
})

export class AlertsComponent {
  isAlertVisible: boolean = true; // Initially, the alert is visible

  closeAlert(): void {
    this.isAlertVisible = false; // Hides the alert
  }
  toggleClass = "line";
  prsimCodeData: any = PrismCode;
  tsCodeData: any = tsCode;
  reusableCode: any = reuseCode;

  alerts!: Alert[];

  livealerts: { message: string; show: boolean }[] = [];

  showAlert() {
    // Add a new alert to the array
    this.livealerts.push({
      message: 'Nice, you triggered this alert message!',
      show: true,
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  solidAlerts: SolidAlert[] = solidALERTS;
  solidroundedAlerts: Alert[] = solidRoundedALERTS;
  outlineAlerts: OutlineAlert[] = outlineALERTS;
  solidShadowsAlerts: Alert[] = solidShadowsALERTS;
  differentShadowsAlerts: Alert[] = differentShadowsAlerts;
  roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
  CustomeButtonAlerts: Alert[] = CustomeButtonALERTS;
  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
  CustomizedIconAlerts: Alert1[] = CustomizedIconALERTS;
  imageAlerts: Alert2[] = imageAlerts ;
  imageSizeAlerts: Alert3[] = imageSizeAlerts ;
  confirmAlerts: any[] = confirmAlerts ;





  solidClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidAlerts.splice(index, 1);
  }
  solidroundedClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidroundedAlerts.splice(index, 1);
  }

  OutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.outlineAlerts.splice(index, 1);
  }
  solidShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidShadowsAlerts.splice(index, 1);
  }
  differentShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.differentShadowsAlerts.splice(index, 1);
  }
  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }
  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }
  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }
  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }
  customizedIconAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedIconAlerts.splice(index, 1);
  }
  customizedImageAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.imageAlerts.splice(index, 1);
  }
  removeRow(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  public isClosed = false;
  public isClosed1 = false;
  public isClosed2 = false;
  public isClosed3 = false;
  public isClosed4 = false;
  public isClosed5 = false;
  public isClosed6 = false;
  public isClosed7 = false;
  public isClosed8 = false;
  public isClosed9 = false;
  public isClosed10 = false;
  public isClosed11 = false;
  public isClosed12 = false;
  public isClosed13 = false;
  public isClosedA = false;
  public isClosedB = false;
  public isClosedC = false;
  public isClosedD = false;
  alertData = [
    { color: ' alert-primary', title: 'A simple primary alert—check it out!',visible:false },
    { color: 'alert-primary1', title: 'A simple primary1 alert—check it out!',visible:false },
    { color: 'alert-primary2 ', title: 'A simple primary2 alert—check it out!',visible:false },
    { color: 'alert-primary3 ', title: 'A simple primary3 alert—check it out!',visible:false },
    { color: 'alert-secondary', title: 'A simple secondary alert—check it out!',visible:false },
    { color: 'alert-success', title: 'A simple success alert—check it out!',visible:false },
    { color: 'alert-danger', title: 'A simple danger alert—check it out!',visible:false },
    { color: 'alert-warning', title: 'A simple warning alert—check it out!',visible:false },
    { color: 'alert-info', title: 'A simple info alert—check it out!',visible:false },
    { color: 'alert-light', title: 'A simple light alert—check it out!',visible:false },
    { color: 'alert-dark', title: 'A simple dark alert—check it out!',visible:false },
  ];
  LinkAlerts = [
    { variant: 'alert-primary', title: 'A simple primary alert with'},
    { variant: 'alert-primary1', title: 'A simple primary1 alert with'},
    { variant: 'alert-primary2 ', title: 'A simple primary2 alert with'},
    { variant: 'alert-primary3 ', title: 'A simple primary3 alert with'},
    { variant: 'alert-secondary', title: 'A simple secondary alert with'},
    { variant: 'alert-success', title: 'A simple success alert with'},
    { variant: 'alert-danger', title: 'A simple danger alert with'},
    { variant: 'alert-warning', title: 'A simple warning alert with'},
    { variant: 'alert-info', title: 'A simple info alert with'},
    { variant: 'alert-light', title: 'A simple light alert with'},
    { variant: 'alert-dark', title: 'A simple dark alert with'},
  ];

  confirmAlertClose(index: number) {
    this.confirmAlerts.splice(index, 1); // Remove the alert from the array
  }
  additionalInfoClose(index: number) {
    this.additionalInfoAlert.splice(index, 1); // Remove the alert from the array
  }
  additionalInfoAlert = [
    {
      variant: 'alert-primary p-0 overflow-hidden' ,
      bgColor:'primary',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'alert-secondary p-0 overflow-hidde',
      bgColor:'secondary',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
       linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'alert-success p-0 overflow-hidde',
      bgColor:'success',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'alert-warning p-0 overflow-hidde',
      bgColor:'warning',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
  ];
  
  handleClose(index: number) {
    this.LinkAlerts.splice(index, 1); // Remove the alert from the list when closed
  }
  InfoSolidAlertData = [
    {
      id: 57,
      type: 'solid-primary',
      title: 'Information Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-white"><path _ngcontent-ng-c3799109348="" d="M0 0h24v24H0V0z" fill="none"></path><path _ngcontent-ng-c3799109348="" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
      message: 'Information alert to show to information',
    },
    {
      id: 58,
      type: 'solid-secondary',
      title: 'Success Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-white"><path _ngcontent-ng-c3799109348="" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path _ngcontent-ng-c3799109348="" d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',
      message: 'Success alert to show to success message',
    },
    {
      id: 59,
      type: 'solid-warning',
      title: 'Warning Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-white"><g _ngcontent-ng-c3799109348=""><rect _ngcontent-ng-c3799109348="" fill="none" height="24" width="24"></rect></g><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><path _ngcontent-ng-c3799109348="" d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon _ngcontent-ng-c3799109348="" points="13,16 11,16 11,18 13,18"></polygon><polygon _ngcontent-ng-c3799109348="" points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>',
      message: 'Warning alert to show to warning message',
    },
    {
      id: 60,
      type: 'solid-danger',
      title: 'danger Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-white"><g _ngcontent-ng-c3799109348=""><rect _ngcontent-ng-c3799109348="" fill="none" height="24" width="24"></rect></g><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><path _ngcontent-ng-c3799109348="" d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect _ngcontent-ng-c3799109348="" height="6" width="2" x="11" y="7"></rect><rect _ngcontent-ng-c3799109348="" height="2" width="2" x="11" y="15"></rect></g></g></g></svg>',
      message: 'danger alert to show to danger message',
    },
  ];
  InfoSolidAlertDataClose(index: number) {
    this.InfoSolidAlertData.splice(index, 1); // Remove the alert from the array
  }
  InfoAlertData = [
    {
      id: 61,
      type: 'primary',
      title: 'Information Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-primary"><path _ngcontent-ng-c3799109348="" d="M0 0h24v24H0V0z" fill="none"></path><path _ngcontent-ng-c3799109348="" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
      message: 'Information alert to show to information',
    },
    {
      id: 62,
      type: 'secondary',
      title: 'Success Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-secondary"><path _ngcontent-ng-c3799109348="" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path _ngcontent-ng-c3799109348="" d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',
      message: 'Success alert to show to success message',
    },
    {
      id: 63,
      type: 'warning',
      title: 'Warning Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-warning"><g _ngcontent-ng-c3799109348=""><rect _ngcontent-ng-c3799109348="" fill="none" height="24" width="24"></rect></g><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><path _ngcontent-ng-c3799109348="" d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon _ngcontent-ng-c3799109348="" points="13,16 11,16 11,18 13,18"></polygon><polygon _ngcontent-ng-c3799109348="" points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>',
      message: 'Warning alert to show to warning message',
    },
    {
      id: 64,
      type: 'danger',
      title: 'danger Alert',
      iconColor: 'white',
      iconPath: '<svg _ngcontent-ng-c3799109348="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" class="sm:flex-shrink-0 fill-danger"><g _ngcontent-ng-c3799109348=""><rect _ngcontent-ng-c3799109348="" fill="none" height="24" width="24"></rect></g><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><g _ngcontent-ng-c3799109348=""><path _ngcontent-ng-c3799109348="" d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect _ngcontent-ng-c3799109348="" height="6" width="2" x="11" y="7"></rect><rect _ngcontent-ng-c3799109348="" height="2" width="2" x="11" y="15"></rect></g></g></g></svg>',
      message: 'danger alert to show to danger message',
    },
  ];

  InfoAlertDataClose(index: number) {
    this.InfoAlertData.splice(index, 1); // Remove the alert from the array
  }

  Closetoggle(item: any) {
    if (item == 'zero') {
      this.isClosed = true;
    }
    if (item == 'one') {
      this.isClosed1 = true;
    }
    if (item == 'two') {
      this.isClosed2 = true;
    }
    if (item == 'three') {
      this.isClosed3 = true;
    }
    if (item == 'four') {
      this.isClosed4 = true;
    }
    if (item == 'five') {
      this.isClosed5 = true;
    }
    if (item == 'six') {
      this.isClosed6 = true;
    }
    if (item == 'seven') {
      this.isClosed7 = true;
    }
    if (item == 'eight') {
      this.isClosed8 = true;
    }
    if (item == 'nine') {
      this.isClosed9 = true;
    }
    if (item == 'ten') {
      this.isClosed10 = true;
    }
    if (item == 'eleven') {
      this.isClosed11 = true;
    }
    if (item == 'twelve') {
      this.isClosed12 = true;
    }
    if (item == 'A') {
      this.isClosedA = true;
    }
    if (item == 'B') {
      this.isClosedB = true;
    }
    if (item == 'C') {
      this.isClosedC = true;
    }
    if (item == 'D') {
      this.isClosedD = true;
    }
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  private _message$ = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  constructor(private sanitizer: DomSanitizer) {
    this.reset();
  }
  // Method to sanitize SVG icon content
  getSanitizedSVG(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
 
  public changeSuccessMessage() {
    this._message$.next(`${new Date()} - Message successfully changed.`);
  }
}
