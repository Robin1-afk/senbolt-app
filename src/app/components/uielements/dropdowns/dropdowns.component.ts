import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/uielements';
import * as reuseCode from '../../../shared/prismData/uielements';
@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent, SpkDropdownsComponent],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
}) 
export class DropdownsComponent {
  reusableCode: any = reuseCode;
  prsimCodeData: any = PrismCode;
  dropdowns = [
    {
      label: 'Dropdown button',
      items: ['Action', 'Another action', 'Something else here'],
      type: 'primary'
    },
    {
      label: 'Dropdown link',
      items: ['Action', 'Another action', 'Something else here'],
      type: 'secondary'
    }
  ];

  buttonGroups = [
    {
      label: 'Action',
      style: 'btn-outline-primary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-secondary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-success',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-info',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-warning',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-danger',
      items: ['Action', 'Another action', 'Something else here']
    }
  ];
 
  singledropdown = [
    {
      label: 'Action',
      style: 'btn-primary',
    },
    {
      label: 'Action',
      style: 'btn-secondary',
    },
    {
      label: 'Action',
      style: 'btn-success',
    },
    {
      label: 'Action',
      style: 'btn-info',
    },
    {
      label: 'Action',
      style: 'btn-warning',
    },
    {
      label: 'Action',
      style: 'btn-danger',
    }
  ];
  Roundeddropdown = [
    {
      label: 'Action',
      style: 'btn-primary !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-secondary !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-success !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-info !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-warning !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-danger !rounded-full',
    }
  ];

  dropdownsizing = [
    { style: 'ti-btn-primary btn-wave ti-btn-primary ti-dropdown-toggle', splitbuttonClass: 'btn btn-primary', splitbutton: false, label: 'Large button' },
    { style: 'ti-btn btn-wave  ti-btn-light opacity-[0.85] !border !border-s-0 !border-defaultborder dark:!border-defaultborder/10 !rounded-s-none !m-0 waves-effect waves-light', splitbuttonClass: '!border !border-defaultborder !me-0 !rounded-e-none btn dark:!border-defaultborder/10 ti-btn-lg ti-btn-light ti-dropdown-toggle', splitbutton: true, splitTitle: 'Large Split button' },
    { style: 'ti-btn btn-wave ti-btn-primary !py-1 !px-4 !text-[0.75rem] ti-dropdown-toggle', splitbuttonClass: 'ti-btn-group !p-0 !m-0 !border-0 ti-dropdown hs-dropdown', splitbutton: false, label: 'Small button' },
    { style: 'ti-btn btn-wave !py-1 !px-4 !text-[0.75rem] !border !border-s-0 !border-defaultborder dark:!border-defaultborder/10 ti-btn-light opacity-[0.85] !rounded-s-none', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem]  ti-btn-light !border !border-defaultborder  dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Small Split button' },
  ];

  OutlineGroups = [
    {
      label: 'Action',
      style: 'btn-outline-primary dropdown-toggle',
    },
    {
      label: 'Action',
      style: 'btn-outline-secondary dropdown-toggle',
    },
    {
      label: 'Action',
      style: 'btn-outline-success dropdown-toggle',
    },
    {
      label: 'Action',
      style: 'btn-outline-info dropdown-toggle',
    },
    {
      label: 'Action',
      style: 'btn-outline-warning dropdown-toggle',
    },
    {
      label: 'Action',
      style: 'btn-outline-danger dropdown-toggle',
    }
  ];

  roundedOutlineGroups = [
    {
      label: 'Action',
      style: 'btn-outline-primary dropdown-toggle !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-outline-secondary dropdown-toggle !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-outline-success dropdown-toggle !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-outline-info dropdown-toggle !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-outline-warning dropdown-toggle !rounded-full',
    },
    {
      label: 'Action',
      style: 'btn-outline-danger dropdown-toggle !rounded-full',
    }
  ];

  splitButtons = [
    { style: 'ti-btn btn-wave !rounded-s-none ti-btn-secondary opacity-[0.85] ti-dropdown-toggle', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem] ti-btn-secondary dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Action'},
    { style: 'ti-btn btn-wave !rounded-s-none ti-btn-success opacity-[0.85] ti-dropdown-toggle', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem] ti-btn-success dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Action'},
    { style: 'ti-btn btn-wave !rounded-s-none ti-btn-info opacity-[0.85] ti-dropdown-toggle', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem] ti-btn-info dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Action'},
    { style: 'ti-btn btn-wave !rounded-s-none ti-btn-warning opacity-[0.85] ti-dropdown-toggle', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem] ti-btn-warning dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Action'},
    { style: 'ti-btn btn-wave !rounded-s-none ti-btn-danger opacity-[0.85] ti-dropdown-toggle', splitbuttonClass: 'ti-btn btn-wave  !py-1 !px-4 !text-[0.75rem] ti-btn-danger dark:!border-defaultborder/10 !me-0 !rounded-e-none ti-dropdown-toggle', splitbutton: true, splitTitle: 'Action'},
     ];

     SvgDropdowns = [
     { Customclass:'[--placement:top-left] rtl:[--placement:bottom-right]',style: 'hs-dropdown-toggle ti-dropdown-toggle ti-btn btn-wave  ti-btn-primary !py-2 waves-effect waves-light', splitbutton: false, label: 'Action'},
     { Customclass:'[--placement:top-right] m-1', style: 'hs-dropdown-toggle relative ti-btn btn-wave  ti-btn-secondary !opacity-[0.85] !m-0 !rounded-s-none ti-dropdown-toggle waves-effect waves-light', splitbuttonClass: 'relative ti-dropdown-toggle  ti-btn btn-wave !m-0 ti-btn-secondary !py-1 !rounded-e-none !me-0 waves-effect waves-light', splitbutton: true, splitTitle: 'Split dropup'},
    ];

    dropright = [
      { Customclass:'[--placement:right-top] rtl:[--placement:bottom-right]',style: 'hs-dropdown-toggle ti-dropdown-toggle ti-btn btn-wave  ti-btn-primary !py-2 waves-effect waves-light', splitbutton: false, label: 'Action'},
      { Customclass:'[--placement:right-top] m-1', style: 'hs-dropdown-toggle relative ti-dropdown-toggle !opacity-[0.85] rounded-none ti-btn btn-wave ti-btn-secondary !rounded-s-none', splitbuttonClass: 'hs-dropdown-toggle relative ti-btn btn-wave ti-btn-secondary !py-2 !rounded-e-none ti-dropdown-toggle !me-0', splitbutton: true, splitTitle: 'Split dropup'},
    ]

    dropleft = [
      { Customclass:'[--placement:left-top] m-1 rtl:[--placement:bottom-right]',style: 'hs-dropdown-toggle ti-dropdown-toggle ti-btn btn-wave  ti-btn-primary !py-2 waves-effect waves-light', splitbutton: false, label: 'Action'},
      { Customclass:'[--placement:left-top] m-1', style: 'hs-dropdown-toggle relative ti-dropdown-toggle !opacity-[0.85] rounded-none ti-btn btn-wave ti-btn-secondary !rounded-s-none', splitbuttonClass: 'hs-dropdown-toggle relative ti-btn btn-wave ti-btn-secondary !py-2 !rounded-e-none ti-dropdown-toggle !me-0', splitbutton: true, splitTitle: 'Split dropleft'},
    ]

    Activedropdown = [
      {
        label: 'Dropstart',
        style: 'btn-primary',
      },
    ]

    Disabledropdown = [
      {
        label: 'Dropstart',
        style: 'btn-primary',
      },
    ]

    AutocloseDropdown = [
      {
        label: 'Default dropdown',
        Id:'defaultDropdown',
        style: 'btn-primary',
      },
      {
        label: 'Clickable outside',
        Id:'dropdownMenuClickableOutside',
        style: 'btn-secondary',
      },
      {
        label: 'Clickable inside',
        Id:'dropdownMenuClickableInside',
        style: 'btn-info',
      },
      {
        label: 'Manual close',
        Id:'dropdownMenuClickable',
        style: 'btn-warning',
      },
    ]

    AlignmentDropdown = [
      {
        svgclass:'!text-white hs-dropdown-open:rotate-90 ti-dropdown-caret',
        svgIcon:'M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11',
        label: 'Dropdown',
        Id:'defaultDropdown',
        style: 'btn-primary',
      },
      {
        svgclass:'!text-white hs-dropdown-open:rotate-180 ti-dropdown-caret',
        svgIcon:'M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11',
        label: 'Right-aligned menu',
        Id:'dropdownMenuClickableOutside',
        style: 'btn-secondary',
      },
      {
        svgclass:'!text-white hs-dropdown-open:rotate-180 ti-dropdown-caret',
        svgIcon:'M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11',
        label: 'Left-aligned, right-aligned lg',
        Id:'dropdownMenuClickableInside',
        style: 'btn-info',
      },
      {
        svgclass:'!text-white hs-dropdown-open:rotate-180 ti-dropdown-caret',
        svgIcon:'M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11',
        label: 'Right-aligned, left-aligned lg',
        Id:'dropdownMenuClickable',
        style: 'btn-warning',
      },
      {
        svgclass:'hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white',
        svgIcon:'M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14',
        Customclass:' [--placement:left-top] m-1',
        Svgaftertext:'Dropstart',
        label: '',
        Id:'dropdownMenuClickable',
        style: 'btn-success',
      },
      {
        svgclass:'hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white',
        svgIcon:'M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14',
        Customclass:'[--placement:right-top] m-1',
        label: 'Dropend',
        Id:'dropdownMenuClickable',
        style: 'btn-primary',
      },
      {
        svgclass:'hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white',
        svgIcon:'M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11',
        Customclass:'[--placement:top-left] m-1',
        label: 'Dropup',
        Id:'dropdownMenuClickable',
        style: 'btn-success',
      },
    ]




    Ghostdropdown = [
      {
        label: 'Primary',
        style: 'ti-btn-ghost-primary',
      },
      {
        label: 'Secondary',
        style: 'ti-btn-ghost-secondary',
      },
      {
        label: 'Success',
        style: 'ti-btn-ghost-success',
      },
      {
        label: 'Info',
        style: 'ti-btn-ghost-info',
      },
      {
        label: 'Warning',
        style: 'ti-btn-ghost-warning',
      },
      {
        label: 'Danger',
        style: 'ti-btn-ghost-danger',
      }
    ]
}
