import { Component, HostListener, OnInit,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { FormsModule,FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';;
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../../shared/shared.module';
import jsonDoc from '../../../../shared/data/editor';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-mailapp',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,SpkDropdownsComponent,AngularEditorModule,HttpClientModule,
    ReactiveFormsModule,FormsModule,NgxEditorModule, OverlayscrollbarsModule],
  templateUrl: './mailapp.component.html',
  styleUrl: './mailapp.component.scss'
})
export class MailappComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

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

  htmlContent1:string = ``;

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',    
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
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
  Selection = [
    { value: 1, label: 'jay@gmail.com' },
    { value: 2, label: 'kia@gmail.com' },
    { value: 3, label: 'don@gmail.com' },
    { value: 4, label: 'kimo@gmail.com' },
  
];

  selectedAccounts = [];

  compareAccounts = (item:any, selected:any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.handleResize();
  }

  handleResize(): void {
    const isSmallScreen = window.innerWidth >= 992;
    document.querySelector('.mail-navigation')?.classList.add('hidden');
    document.querySelector('.total-mails')?.classList.add('hidden');
    document.querySelector('.total-mails')?.classList.remove('hidden');
  }

  removedetails1() {
    if (window.innerWidth <= 992) {
    document.querySelector('.mail-navigation')?.classList.remove('hidden');
    document.querySelector('.total-mails')?.classList.add('hidden');
    } else
    {
      document.querySelector('.mail-navigation')?.classList.remove('d-block');
      document.querySelector('.total-mails')?.classList.remove('hidden');
    }
  }

  allMailremove() {
    if (window.innerWidth <= 992) {
      document.querySelector('.mail-navigation')?.classList.add('hidden');
      document.querySelector('.total-mails')?.classList.remove('hidden');
    }
  }

  Mails=[
    {label:"jay@gmail.com",value:1},
    {label:"kia@gmail.com",value:2},
    {label:"don@gmail.com",value:3},
    {label:"kimo@gmail.com",value:4},
  ]
  selectedTags=[1]
  mails = [
    { name: 'All Mails', icon: 'ti ti-mail', badge: '2,142', badgeClass: 'bg-primarytint1color ' },
    { name: 'Inbox', icon: 'ti ti-inbox', badge: '12', badgeClass: 'bg-primarytint2color ' },
    { name: 'Sent', icon: 'ti ti-send' },
    { name: 'Drafts', icon: 'ti ti-notes' },
    { name: 'Spam', icon: 'ti ti-alert-circle', badge: '6', badgeClass: 'bg-primarytint3color ' },
    { name: 'Archive', icon: 'ti ti-archive' },
    { name: 'Important', icon: 'ti ti-bookmark' },
    { name: 'Trash', icon: 'ti ti-trash' },
    { name: 'Starred', icon: 'ti ti-star', badge: '05', badgeClass: 'bg-warning' },
  ];

  labels = [
    { name: 'Mail', iconClass: 'text-primarytint1color ' },
    { name: 'Home', iconClass: 'text-primarytint2color ' },
    { name: 'Work', iconClass: 'text-primarytint3color ' },
    { name: 'Friends', iconClass: 'text-warning' }
  ];
  onlineUsers = [
    {
      name: 'Angelica',
      message: 'Can please send me the file.',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      name: 'Rexha',
      message: 'Waiting for response 👍.',
      avatar: './assets/images/faces/6.jpg'
    }
  ];
  allMails = [
    {
      sender: 'Iliana Lilly',
      time: '12:12AM',
      subject: 'Meeting Agenda',
      message: 'Reviewing the agenda for tomorrow\'s meeting. We\'ll be discussing the project timeline and budget allocation.',
      avatar: './assets/images/faces/5.jpg',
      iconClass:'ri-attachment-2 align-middle fs-12',
      badge: null,
      isChecked: false,
      isStarred: true,
    },
    {
      sender: 'Priceton Gray',
      time: '03:18PM',
      subject: 'Exclusive Offers Inside!',
      message: 'Unlock exclusive deals and discounts inside! Don\'t miss out on this limited-time opportunity to save big on your favorite products and services.',
      avatar: './assets/images/faces/12.jpg',
      badge: null,
      isChecked: true,
      isStarred: false,
    },
    {
      sender: 'Charlie Edson',
      time: 'Yesterday, 06:45AM',
      subject: 'Limited-Time Offer: Save on Your Next Trip!',
      message: 'Unlock exclusive deals and discounts inside! Don\'t miss out on this limited-time opportunity to save big on your favorite products and services.',
      avatar: null,
      badge: 'Promotion',
      isChecked: false,
      isStarred: false,
      initials: 'CH',
      avatarClass: 'bg-primary',
      badgeClass: 'bg-warning'
    },
    {
      sender: 'Isha Bella',
      time: 'May 15 2024, 08:16PM',
      subject: 'You Have New Notifications',
      message: 'Stay connected with your friends and family. See who\'s commented on your latest post and catch up on messages from loved ones.',
      avatar: './assets/images/faces/7.jpg',
      isStarred: false,
      badge: 'Social',
      isChecked: true,
      badgeClass: 'bg-primarytint1color '
    },
    {
      sender: 'Danny Raj',
      time: 'May 13 2024, 11:24AM',
      subject: 'New Connection Request',
      message: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.',
      avatar: './assets/images/faces/15.jpg',
      badge: null,
      isChecked: false,
      isStarred: true,
    },
    {
      sender: 'Spencer Robin',
      time: 'May 18 2024, 11:15PM',
      subject: 'Invitation By Summer Soiree Under the Stars!',
      message: 'Hello,You are invited to join us for an unforgettable evening of summer magic at our Summer Soiree Under the stars.',
      avatar: null,
      badge: 'Personal',
      isChecked: false,
      isStarred: true,
      initials: 'SR',
      avatarClass: 'bg-primarytint2color ',
      badgeClass: 'bg-primarytint3color '
    },
    {
      sender: 'Harry Justin',
      time: 'April 05 2024, 08:12AM',
      subject: 'New Connection Request',
      message: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.',
      avatar: null,
      badge: null,
      isChecked: false,
      isStarred: false,
      initials: 'HJ',
      avatarClass: 'bg-warning',
    },
    {
      sender: 'Nicolas Noor',
      time: 'March 20, 08:30PM',
      subject: 'Claim Your Prize Now!',
      message: 'Congratulations! You\'ve won a prize! Click here to claim your reward before it\'s too late and enjoy your well-deserved prize. ',
      avatar: './assets/images/faces/13.jpg',
      badge: null,
      isChecked: false,
      isStarred: false,
    }
  ];
  recipients = [
    { name: 'Hadley Kylin', status: 'online', avatar: './assets/images/faces/11.jpg' },
    { name: 'Iliana Lilly', status: 'online', avatar: './assets/images/faces/7.jpg' },
    { name: 'Jasmine Della', status: 'offline', avatar: './assets/images/faces/4.jpg' },
    { name: 'Emanuel Rush', status: 'online', avatar: './assets/images/faces/8.jpg' },
    { name: 'Nyra Tiyana', status: 'offline', avatar: './assets/images/faces/3.jpg' },
    { name: 'Maria Violet', status: 'offline', avatar: './assets/images/faces/11.jpg' },
    { name: 'Priceton Gray', status: 'online', avatar: './assets/images/faces/16.jpg' },
    { name: 'Charlie Edson', status: 'offline', avatar: './assets/images/faces/10.jpg' },
    { name: 'Spencer Robin', status: 'offline', avatar: './assets/images/faces/15.jpg' }
  ];
  allTasksChecked!: boolean;

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
}