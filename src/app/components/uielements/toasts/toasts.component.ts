import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import * as PrismCode from '../../../shared/prismData/uielements'
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkToastComponent } from '../../../../@spk/reusable-ui-elements/spk-toast/spk-toast.component';
@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,SpkToastComponent],
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {
  prsimCodeData: any = PrismCode;
  BasicToast = [
    {
      type: 'ti-toast bg-white dark:bg-bodybg dark:border-white/10 mb-1',
      iconColor: 'text-primary',
      iconPath: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
      message: 'This is a normal message.'
    },
    {
      type: 'ti-toast bg-white dark:bg-bodybg dark:border-white/10 mb-1',
      iconColor: 'text-success',
      iconPath: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z',
      message: 'This is a success message.'
    },
    {
      type: 'ti-toast bg-white dark:bg-bodybg dark:border-white/10 mb-1',
      iconColor: 'text-danger',
      iconPath: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z',
      message: 'This is an error message.'
    },
    {
      type: 'ti-toast bg-white dark:bg-bodybg dark:border-white/10 mb-1',
      iconColor: 'text-orangemain',
      iconPath: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
      message: 'This is a warning message.'
    }
  ];

  CondensedToast = [
    {
      id:8,
      type: 'ti-toast hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-white  dark:bg-bodybg dark:border-white/10',
      iconColor: 'text-primary',
      message: ' Your email has been sent'
    },
  ];

  SolidColorToast =[
    {id:1, color:'bg-primary'},
    {id:2, color:'bg-secondary'},
    {id:3, color:'bg-warning'},
    {id:4, color:'bg-info'},
    {id:5, color:'bg-success'},
    {id:6, color:'bg-danger'},
    {id:7, color:'bg-purplemain'},
  ];

  closeToast(id: number, type: string): void {
    switch (type) {
      case 'SolidColorToast':
        this.SolidColorToast = this.SolidColorToast.filter(toast => toast.id !== id);
        break;
      case 'ColorToast':
        this.ColorToast = this.ColorToast.filter(toast => toast.id !== id);
        break;
      case 'DismissToast':
        this.DismissToast = this.DismissToast.filter(toast => toast.id !== id);
        break;
      case 'CondensedToast':
        this.CondensedToast = this.CondensedToast.filter(toast => toast.id !== id);
        break;
      default:
        break;
    }
  }
  ColorToast =[
    {id:11, color:'bg-primary/10',textColor:'text-primary'},
    {id:12, color:'bg-secondary/10',textColor:'text-secondary'},
    {id:13, color:'bg-warning/10',textColor:'text-warning'},
    {id:14, color:'bg-info/10',textColor:'text-info'},
    {id:15, color:'bg-success/10',textColor:'text-success'},
    {id:16, color:'bg-danger/10',textColor:'text-danger'},
    {id:17, color:'bg-purplemain/10',textColor:'text-purplemain'},
  ];

  loadingToast = [
    {
      type: 'ti-toast bg-white dark:bg-bodybg dark:border-white/10',
      iconColor: 'text-primary',
      message: 'Action in progress'
    },
  ];
  DismissToast = [
    { 
      id:10,
      type: 'hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 ti-toast bg-white dark:bg-bodybg dark:border-white/10',
      iconColor: 'text-primary',
      message: 'Your email has been sent'
    },
  ];
}
