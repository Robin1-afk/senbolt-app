import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
import { SharedModule } from '../../../shared/shared.module';
interface Recent {
  message?: string;
  image?: string;
  images?:any[];
  bg?:string;
  name?: string;
  time?: string;
  unReadMsgCount?: string;
  unReadMsgStatus?: string;
  status?: string;
  chatMsgUnread: boolean;
  chatMsgTyping: boolean;
  number?:string;
  online?:string;
  bg1?:string
}
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
  },
];
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OverlayscrollbarsModule,SpkDropdownsComponent,SpkGalleryComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  imageData = data;
  active: any;
  closeResult = '';
  isOpen: boolean = false;
 
  recents: Recent[] = [
    
    {
      name: ' Rashid Khan',
      message: 'Hey!! you are there? 😊',
      image: './assets/images/faces/5.jpg',
      time: '11:12PM',
      unReadMsgCount: '3',
      unReadMsgStatus: 'bg-primarytint2color',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Jamison Jen',
      message: 'Typing...',
      image: './assets/images/faces/2.jpg',
      time: '06:52AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
    },
    {
      name: 'Andy Max',
      message: 'Great! I am happy to here this from you. ☕',
      image: './assets/images/faces/10.jpg',
      time: '10:15AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Kerina Cherish',
      message: 'Looking forward about the matter',
      image: './assets/images/faces/6.jpg',
      time: '03:15PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: false,
    },
  ];
  allchats: Recent[] = [
    {
      name: 'Rony Erick',
      message: 'You should come definately',
      image: './assets/images/faces/11.jpg',
      time: '4:13 PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Kenath kin',
      message: 'Did you remember the date',
      image: './assets/images/faces/3.jpg',
      time: '12:46AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Thomas Lie',
      message: 'Hi, Thank you for everything',
      image: './assets/images/faces/13.jpg',
      time: '07:30PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Peter Stark',
      message: 'Going to Australia!',
      image: './assets/images/faces/4.jpg',
      time: '01:18PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Monte Christ',
      message: 'Little Busy 🍕',
      image: './assets/images/faces/13.jpg',
      time: '08:07PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Regina Mos',
      message: 'Have a Question?',
      image: './assets/images/faces/15.jpg',
      time: '09:19PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
  ];
  GroupData: Recent[] = [
    {
      name: 'Huge Rocks',
      bg:"primarytint3color",
      images: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg',
        './assets/images/faces/10.jpg'
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+19",
      online:"4",
      bg1:"primary"
    },
    {
      name: 'Creative Group ',
      bg:"primarytint2color",
      images: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/3.jpg',
        './assets/images/faces/9.jpg',
        './assets/images/faces/12.jpg'
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+123",
      online:"32",
      bg1:"primarytint2color"
    },
    {
      name: 'Anyside Spriritual',
      bg:"primarytint1color",
      images: [
        './assets/images/faces/4.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/13.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+15",
      online:"3",
      bg1:"primarytint3color "
    },
    {
      name: 'Fun Time',
      bg:"secondary",
      images: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/14.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+28",
      online:"5",
      bg1:"secondary"
    },
    {
      name: 'Latest News',
      bg:"warning",
      images: [
        './assets/images/faces/5.jpg',
        './assets/images/faces/6.jpg',
        './assets/images/faces/12.jpg',
        './assets/images/faces/3.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+53",
      online:"2",
      bg1:"warning"
    },
  ];
  GroupChatData = [
    {
      class:'checkforactive',
      status: 'online',
      image: './assets/images/faces/17.jpg',
      name: '  Huge Rocks 😍 ',
      time: '12:24PM',
      message: 'Mony Typing...',
      badge: '2',
      class1:"chat-msg-typing",
      class2:"",
      name1:""
    },
    {
      class:'chat-msg-unread checkforactive',
      status: 'online',
      image: './assets/images/faces/18.jpg',
      name: 'Creative Group',
      time: '06:16AM',
      message: ' Have any updates today?',
      class1:"",
      class2:"group-indivudial",
      name1:"Kin :"
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/19.jpg',
      name: ' Anyside Spriritual 😎 ',
      time: '2 days ago',
      message: 'Samantha, Adam, Jessica, Emily, Alex',
      class1:"",
      class2:"",
      name1:""
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/20.jpg',
      name: ' Fun Time',
      time: '3 days ago',
      message: 'Elsa,Henry,Susan, Emily, Ashlin',
      class1:"",
      class2:"",
      name1:""
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/21.jpg',
      name: 'Latest News',
      time: '10 days ago',
      message: 'Emanuel, Rony, Alina, Lilly, Rush',
      class1:"",
      class2:"",
      name1:""
    },
  ];

  contacts = [
    {
      group: 'A',
      users: [
        {
          name: 'Ava Taylor',
          avatar: './assets/images/faces/5.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        },
        {
          name: 'Alice Angel',
          avatar: './assets/images/faces/12.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'B',
      users: [
        {
          name: 'Blessy Diamond',
          avatar: './assets/images/faces/14.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'D',
      users: [
        {
          name: 'Catalina Keira',
          avatar: '',
          initials: 'C',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        },
        {
          name: 'Danny Raj',
          avatar: './assets/images/faces/7.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'G',
      users: [
        {
          name: 'Gatin Leo',
          avatar: './assets/images/faces/15.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'L',
      users: [
        {
          name: 'Monte Christ',
          avatar: '',
          initials: 'M',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        },
        {
          name: 'Thomas Lie',
          avatar: './assets/images/faces/2.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'N',
      users: [
        {
          name: 'Nelson Gold',
          avatar: './assets/images/faces/10.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    },
    {
      group: 'V',
      users: [
        {
          name: 'Victoria Gracie',
          avatar: './assets/images/faces/16.jpg',
          dropdownOptions: ['Chat', 'Audio Call', 'Video Call', 'Edit', 'Block', 'Delete']
        }
      ]
    }
  ];

  // selectedData: Recent = this.recents[0];
  // changeTheInfo(data:Recent) {
  //   this.selectedData=data
  //   this.selectedData = this.selectedData;
  //   if (window.innerWidth <= 992) {
  //     document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
  //   }
  // }
  activeUser = this.recents[3];

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }

  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
  removedetails1() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
}
