import { Component } from '@angular/core';

import * as PrismCode from '../../../shared/prismData/uielements';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkTooltipComponent } from '../../../../@spk/reusable-ui-elements/spk-tooltip/spk-tooltip.component';
@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [SharedModule,SpkTooltipComponent,CommonModule,ShowcodeCardComponent],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {
  prsimCodeData: any = PrismCode;

  DirectionsTooltip = [
    {title:'Tooltip on Top',placement:'top', customClass:'' },
    {title:'Tooltip on right',placement:'right', customClass:'[--placement:right]'},
    {title:'Tooltip on bottom',placement:'bottom', customClass:'[--placement:bottom]'},
    {title:'Tooltip on left',placement:'left', customClass:'[--placement:left]'},
  ]
  
  ColorTooltip = [
    {id:1, color:"primary-full", text:"Primary Tooltip", customClass:"[--placement:top]", class1:"primary", class2:"white"},
    {id:2, color:"secondary-full", text:"Secondary Tooltip", customClass:"[--placement:right]", class1:"secondary", class2:"white"},
    {id:3, color:"warning-full", text:"Warning Tooltip", customClass:"[--placement:bottom]", class1:"warning", class2:"white"},
    {id:4, color:"info-full", text:"Info Tooltip", customClass:"[--placement:left]", class1:"info", class2:"white"},
    {id:5, color:"success-full", text:"Success Tooltip", customClass:"[--placement:top]", class1:"success", class2:"white"},
    {id:6, color:"danger-full", text:"Danger Tooltip", customClass:"[--placement:bottom]", class1:"danger", class2:"white"},
    {id:7, color:"light", text:"Light Tooltip", customClass:"[--placement:bottom]", class1:"light", class2:"dark"},
    {id:8, color:"dark", text:"Dark Tooltip", customClass:"[--placement:bottom]", class1:"dark", class2:"white"},
  ];
  LinkTooltip = [
    {title:'Link Tooltip', customClass:"[--placement:top]", color:'primary' },
  ]
  
  DisabledTooltip = [
    {title:' Disabled Button', disabled:'disabled'},
  ]

  tooltipsData = [
    { 
      svgPath: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
      bgClass: "bg-primary",
      tooltipText: "Home",
      svgClass: "fill-primary",
      customClass:"[--placement:top]"
    },
    { 
      svgPath: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
      bgClass: "bg-secondary",
      tooltipText: "Message",
      svgClass: "fill-secondary",
      customClass:"[--placement:top]"
    },
    { 
      svgPath: "M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z",
      bgClass: "bg-warning",
      tooltipText: "Add User",
      customClass:"[--placement:top]",
      svgClass: "fill-warning"
    },
    { 
      svgPath: "M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z",
      bgClass: "bg-info",
      tooltipText: "Send File",
      customClass:"[--placement:top]",
      svgClass: "fill-info"
    },
    { 
      svgPath: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
      bgClass: "bg-success",
      tooltipText: "Action",
      customClass:"[--placement:top]",
      svgClass: "fill-success"
    }
  ];

  imagesTooltip = [
    { title: 'Alex Carey', buttonClass: 'avatar avatar-md me-2 online avatar-rounded', images:'./assets/images/faces/12.jpg'},
    { title: 'Afshin', buttonClass: 'avatar avatar-lg me-2 online avatar-rounded',images:'./assets/images/faces/3.jpg'},
    { title: 'Marina Kai', buttonClass: 'avatar avatar-xl me-2 online avatar-rounded',images:'./assets/images/faces/15.jpg' },
   
  ];

  constructor( private sanitizer: DomSanitizer) { }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
}
