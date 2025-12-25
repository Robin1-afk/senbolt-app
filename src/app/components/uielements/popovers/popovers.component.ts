import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/prismData/uielements'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { CommonModule } from '@angular/common';
import { SpkTooltipComponent } from '../../../../@spk/reusable-ui-elements/spk-tooltip/spk-tooltip.component';
@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,SpkTooltipComponent,CommonModule],
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent {
  prsimCodeData = prismcodeData;
  popovers = [
    {
      label: 'Popover Right',
      customClass:"[--trigger:click] [--placement:right] rtl:[--placement:left]",
      content: 'And here\'s some amazing content. It\'s very engaging. Right?'
    },
    {
      label: 'Popover Top',
      customClass:"[--trigger:click]",
      content: 'And here\'s some amazing content. It\'s very engaging. Right?'
    },
    {
      label: 'Popover Bottom',
      customClass:"[--trigger:click] [--placement:bottom]",
      content: 'And here\'s some amazing content. It\'s very engaging. Right?'
    },
    {
      label: 'Popover Left',
      customClass:"[--trigger:click] [--placement:left]",
      content: 'And here\'s some amazing content. It\'s very engaging. Right?'
    }
  ];
  ColorPopovers = [
    {
      label: 'Header Primary',
      headerColor: 'primary',
      placement: 'right',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Primary Header',
      buttonClass: 'primary'
    },
    {
      label: 'Header Secondary',
      headerColor: 'secondary',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Secondary Header',
      buttonClass: 'secondary'
    },
    {
      label: 'Header Info',
      headerColor: 'info',
      placement: 'bottom',
      customClass:'[--trigger:click] [--placement:bottom]',
      content: 'Popover With Info Header',
      buttonClass: 'info'
    },
    {
      label: 'Header Warning',
      headerColor: 'warning',
      placement: 'left',
      customClass:'[--trigger:click] [--placement:left]',
      content: 'Popover With Warning Header',
      buttonClass: 'warning'
    },
    {
      label: 'Header Success',
      headerColor: 'success',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Success Header',
      buttonClass: 'success'
    },
    {
      label: 'Header Danger',
      headerColor: 'danger',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Danger Header',
      buttonClass: 'danger'
    }
  ];
  SolidColorPopovers = [
    {
      label: 'Primary',
      headerColor: 'primary Color Background',
      placement: 'right',
      customClass:'[--trigger:click] [--placement:top] ',
      content: 'Popover With Primary Background',
      buttonClass: 'primary'
    },
    {
      label: 'Secondary',
      headerColor: 'secondary Color Background',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Secondary Background',
      buttonClass: 'secondary'
    },
    {
      label: 'Info',
      headerColor: 'info Color Background',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Info Background',
      buttonClass: 'info'
    },
    {
      label: 'Warning',
      headerColor: 'warning Color Background',
      placement: 'left',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Warning Background',
      buttonClass: 'warning'
    },
    {
      label: 'Success',
      headerColor: 'success Color Background',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Success Background',
      buttonClass: 'success'
    },
    {
      label: 'Danger',
      headerColor: 'danger Color Background',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Danger Background',
      buttonClass: 'danger'
    }
  ];
  
  lightColorPopovers = [
    {
      label: 'Primary',
      headerColor: 'Color Background',
      placement: 'right',
      customClass:'[--trigger:click] [--placement:top] ',
      content: 'Popover With Primary Background',
      buttonClass: 'primary'
    },
    {
      label: 'Secondary',
      headerColor: 'Color Background',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Secondary Background',
      buttonClass: 'secondary'
    },
    {
      label: 'Info',
      headerColor: 'Color Background',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Info Background',
      buttonClass: 'info'
    },
    {
      label: 'Warning',
      headerColor: 'Color Background',
      placement: 'left',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Warning Background',
      buttonClass: 'warning'
    },
    {
      label: 'Success',
      headerColor: 'Color Background',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'Popover With Success Background',
      buttonClass: 'success'
    },
    {
      label: 'Danger',
      headerColor: 'Color Background',
      placement: 'top',
      customClass:'[--trigger:click] [--placement:right] rtl:[--placement:left]',
      content: 'Popover With Danger Background',
      buttonClass: 'danger'
    }
  ];
  DisabledPopover = [
    { id: 1,content:' Disabled Popover', customClass:'[--trigger:click] [--placement:top]', button: "Disabled button", color: "primary"},
  ]
  SvgPopover = [
    {
      label: 'Header Primary',
      icon: 'fill-primary',
      popBg:'primary',
      customClass:'[--trigger:click] [--placement:top]',
      content: 'The Icon Popover',
      iconPath: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'
    },
    {
      label: 'Header Secondary',
      icon: 'fill-secondary',
      popBg:'secondary',
      customClass:'[--trigger:click] [--placement:left]',
      content: 'The Icon Popover',
      iconPath: 'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    }
  ];
  ArrowPopover = [
    {
      icon: 'ri-arrow-up-s-line',
      placement: 'top',
      customClass:'[--trigger:click]',
      content: 'Top popover',
    },
    {
      icon: 'ri-arrow-left-s-line',
      placement: 'left',
      customClass:'[--trigger:click] [--placement:left]',
      content: 'Left popover',
    },
    {
      icon: 'ri-arrow-right-s-line',
      placement: 'right',
      customClass:'[--trigger:click] [--placement:right]',
      content: 'Right popover',
    },
    {
      icon: 'ri-arrow-down-s-line',
      placement: 'bottom',
      customClass:'[--trigger:click] [--placement:bottom]',
      content: 'Bottom popover',
    }
  ];

  
  constructor( private sanitizer: DomSanitizer) { }
  
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
}
