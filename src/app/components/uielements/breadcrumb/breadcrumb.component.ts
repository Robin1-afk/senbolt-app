import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/uielements';
import { CommonModule } from '@angular/common';
import { BreadcrumbItem, SpkBreadcrumbComponent } from '../../../../@spk/reusable-ui-elements/spk-breadcrumb/spk-breadcrumb.component';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,CommonModule,SpkBreadcrumbComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  prsimCodeData: any = PrismCode;

breadcrumbs1: BreadcrumbItem[] = [
  { label: 'Home',svgClass: 'flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180',
    svgPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14' },
  { label: 'App Center',
    svgClass: 'flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180',
    svgPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
   },
  { label: 'Application', isActive: true }
];
breadcrumbs2: BreadcrumbItem[] = [
  { label: 'Home',
    iconClass: 'ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-white/10 rtl:rotate-180' },
  { label: 'App Center',
    iconClass: 'ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-white/10 rtl:rotate-180',
   },
  { label: 'Application', isActive: true }
];
breadcrumbs3: BreadcrumbItem[] = [
  { label: 'Home', 
    svgClass: 'flex-shrink-0 h-5 w-5 text-gray-300 dark:text-white/10 mx-2',
    svgPath: 'M6 13L10 3'},
  { label: 'App Center',
    svgClass: 'flex-shrink-0 h-5 w-5 text-gray-300 dark:text-white/10 mx-2',
    svgPath: 'M6 13L10 3'
   },
  { label: 'Application', isActive: true }
];

breadcrumbs4: BreadcrumbItem[] = [
  {
    label: 'Home',
    prefixIconPath: 'M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z',
    prefixIconPath1: 'M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z',
    prefixIconClass: 'flex-shrink-0 me-3 h-4 w-4 text-primary hover:text-primary dark:text-primary',
    svgPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
  },
  {
    label: 'App Center',
    svgPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
  },
  {
    label: 'Application',
    isActive: true
  }
];

breadcrumbLists: BreadcrumbItem[][] = [
  [
    {
      label: 'Home',
      prefixIconPath: 'M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z',
      prefixIconPath1: 'M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z', 
      prefixIconClass: 'flex-shrink-0 me-3 h-4 w-4 text-primary hover:text-primary dark:text-primary'
    }
  ],
  [
    {
      label: 'Home',
      prefixIconPath: 'M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z',
      prefixIconPath1: 'M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z',
      prefixIconClass: 'flex-shrink-0 me-3 h-4 w-4 text-primary hover:text-primary dark:text-primary',
      separatorIconPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14',
      separatorIconClass: 'flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180'
    },
    {
      label: 'Library',
      isLast: true
    }
  ],   
  [
    {
      label: 'Home',
      prefixIconPath: 'M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z',
    prefixIconPath1: 'M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z',
      prefixIconClass: 'flex-shrink-0 me-3 h-4 w-4 text-primary hover:text-primary dark:text-primary',
      separatorIconPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14',
      separatorIconClass: 'flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180'
    },
    {
      label: 'Library',
     
      separatorIconPath: 'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14',
      separatorIconClass: 'flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180'
    },
    {
      label: 'Data',
      isLast: true
    }
  ]
];
}
