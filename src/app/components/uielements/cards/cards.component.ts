import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkImageCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-image-card/spk-image-card.component';
import { CommonModule } from '@angular/common';
import { SpkHorizontalCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-horizontal-card/spk-horizontal-card.component';
import { SpkBgcolorCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-bgcolor-card/spk-bgcolor-card.component';
import { SpkBorderCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-border-card/spk-border-card.component';
import { SpkUtilitiesCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-utilities-card/spk-utilities-card.component';
import { SpkNavigationCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-navigation-card/spk-navigation-card.component';
import { SpkAlignmentCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-alignment-card/spk-alignment-card.component';
import { SpkCollapseCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-collapse-card/spk-collapse-card.component';
import { SpkMountainsCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-mountains-card/spk-mountains-card.component';
import { SpkListgroupCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-listgroup-card/spk-listgroup-card.component';
import { SpkGridmarkupCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-gridmarkup-card/spk-gridmarkup-card.component';
import { SpkOverlayCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-overlay-card/spk-overlay-card.component';
import { SpkTitleCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-title-card/spk-title-card.component';
import { SpkBlockquoteCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-blockquote-card/spk-blockquote-card.component';
import { SpkHeaderFooterCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-header-footer-card/spk-header-footer-card.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkCustomCardComponent } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-custom-card/spk-custom-card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SharedModule, SpkImageCardComponent, CommonModule, SpkHorizontalCardComponent, SpkBgcolorCardComponent, SpkBlockquoteCardComponent,
    SpkAlignmentCardComponent, SpkMountainsCardComponent, SpkGridmarkupCardComponent, SpkOverlayCardComponent, SpkTitleCardComponent,
    SpkHeaderFooterCardComponent, SpkCustomCardComponent, SpkBorderCardComponent, SpkUtilitiesCardComponent, SpkNavigationCardComponent, SpkCollapseCardComponent, SpkListgroupCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

constructor( private sanitizer: DomSanitizer) { }

getSanitizedSVG(svgContent: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(svgContent);
} 
  featuredCards = [
    {
      header: 'Featured',
      title: 'Special title treatment',
      text: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
      buttonText: 'Read More',
      buttonClass: 'btn-primary',
      links: []
    },
    {
      header: '',
      title: 'Card title',
      subtitle: 'Card subtitle',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available there are so many ways to solve but the majority.',
      buttonText: '',
      links: [
        { text: 'Buy Now', href: 'javascript:void(0);', class: 'text-danger m-1' },
        { text: 'Review', href: 'javascript:void(0);', class: 'text-success m-1' }
      ]
    }
  ];

  blockquotes = [
    {
      quote: "Goodness isn't about avoiding falls, but about the courage to rise, stronger and kinder, with every stumble.",
      author: 'Someone famous',
      source: 'Source Title',
      isDarkTheme: false,
      backgroundClass: ''
    },
    {
      quote: "Goodness isn't about avoiding falls, but about the courage to rise, stronger and kinder, with every stumble.",
      author: 'Someone famous',
      source: 'Source Title',
      isDarkTheme: true,
      backgroundClass: 'bg-secondarytint3color'
    }
  ];
  headerFooterCard = [
    {
      headerIcon: 'ri-heart-fill text-danger',
      avatar: './assets/images/faces/5.jpg',
      avatarSize: 'avatar-xl',
      bodyTitle: 'Sasha Max',
      bodyText: 'Web Developer',
      buttons: [
        { text: 'Facebook', class: 'btn-icon btn-facebook', action: () => console.log('Facebook clicked') },
        { text: 'Twitter', class: 'btn-icon btn-twitter', action: () => console.log('Twitter clicked') },
        { text: 'Instagram', class: 'btn-icon btn-instagram', action: () => console.log('Instagram clicked') }
      ]
    },
    {
      headerTitle: 'Calculations',
      bodyText: 'Lorem Ipsum is therefore always free from repetition, injected humour.',
      footerText: '11.32pm'
    },
    {
      ratings: 4,
      bodyTitle: 'Very Great!',
      bodyText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      timestamp: '1 year ago',
      avatar: './assets/images/faces/12.jpg'
    },
    {
      bodyTitle: 'Angelina Caprio',
      bodyText: 'Angular Developer',
      stats: [
        { label: 'Posts', value: '25' },
        { label: 'Followers', value: '1253' },
        { label: 'Following', value: '367' }
      ],
      footerText: 'Angular Expert'
    }
  ];
  // calculationsCard = [
  //   {
  //     svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  //       <path fill="#C6CDD1" d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"/>
  //       <path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z"/>
  //       <path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z"/>
  //       <circle cx="16" cy="16" r="7" fill="#136ad0"/>
  //     </svg>`,
  //     title: 'Calculations',
  //     footerText: 'Lorem Ipsum is therefore always free from repetition, injected humour.',
  //     borderClass: 'border-primary'
  //   }
  // ];

  customCard = [
    {
      avatar: './assets/images/faces/11.jpg',
      name: 'Gatin Leo',
      subtitle: '28 Years, Male',
      dropdownItems: ['Week', 'Month', 'Year'],
      bodyText: 'If you are going to use, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.',
      footerLeftText: '28,Nov 2024',
      footerRightText: 'Assistant Professor',
      footerRightTextClass: 'text-success'
    }
  ];
  reviews = [
    {
      rating: 4,
      timestamp: '1 year ago',
      reviewTitle: 'Very Great!',
      reviewText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      reviewerName: 'Corey Anderson',
      reviewerAvatar: './assets/images/faces/12.jpg'
    }
  ];
  newsCards = [
    {
      headerTitle: 'Featured',
      bodyTitle: 'Breaking News!',
      bodyText: 'With supporting text below as a natural lead-in to additional content.',
      primaryButton: { text: 'Read More', action: () => console.log('Read More clicked') },
      secondaryButton: { text: 'Close', action: () => console.log('Close clicked') },
      footerText: '11.32pm'
    }
  ];

  mediaCards = [
    {
      avatar: './assets/images/faces/12.jpg',
      stats: [
        { label: 'Posts', value: '25' },
        { label: 'Followers', value: '1253' },
        { label: 'Following', value: '367' }
      ],
      name: 'Angelina Caprio',
      jobTitle: 'Angular Developer',
      aboutText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions',
      additionalText: ''
    }
  ];
  
  profiles = [
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Iliana Lilly',
      jobTitle: 'Web Developer',
     
    }
  ];
  
  titleCard = [
    {
      imageUrl: './assets/images/media/media-24.jpg',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      listItems: ['An item', 'A second item'],
      links: [
        { text: 'Card link', href: 'javascript:void(0);', class: 'text-primary' },
        { text: 'Another link', href: 'javascript:void(0);', class: 'text-secondary' }
      ]
    },
    {
      imageUrl: './assets/images/media/media-22.jpg',
      title: 'Card title',
      text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.',
      buttonText: 'Read More',
      footerText: 'Last updated 3 mins ago'
    }
  ];

  markupCard = [
    {
      imageUrl: './assets/images/media/media-26.jpg',
      title: 'Product A',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Purchase',
      buttonClass: 'ti-btn-primary'
    },
    {
      imageUrl: './assets/images/media/media-27.jpg',
      title: 'Product C',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Purchase',
      buttonClass: 'ti-btn-light'
    }
  ];

  listCards = [
    {
      header: '',
      items: ['An item', 'A second item', 'A third item', 'A fourth item'],
      footer: ''
    },
    {
      header: 'Featured',
      items: ['An item', 'A second item', 'A third item'],
      footer: ''
    },
    {
      header: '',
      items: ['An item', 'A second item', 'A third item'],
      footer: 'Card footer'
    }
  ];

  mountainCards = [
    {
      imageUrl: './assets/images/media/media-4.jpg',
      title: 'Mountains',
      badgeText: 'New',
      bgColor: 'primary',
      badgeClass: 'bg-primary',
      text: 'With supporting text below as a natural lead-in.'
    },
    {
      imageUrl: './assets/images/media/media-9.jpg',
      title: 'Hills',
      badgeText: 'Hot',
      bgColor: 'New',
      badgeClass: 'bg-secondary',
      text: 'With supporting text below as a natural lead-in.'
    },
    {
      imageUrl: './assets/images/media/media-15.jpg',
      title: 'Nature',
      badgeText: 'Offer',
      bgColor: 'text-dark',
      badgeClass: 'bg-light',
      text: 'With supporting text below as a natural lead-in.'
    }
  ];

  collapseCards = [
    {
      title: 'Card With Collapse Button',
      subtitle: 'Collapsible Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: true,
      isClosable: false,
      isFullscreenable: false
    },
    {
      title: 'Card With Close Button',
      subtitle: 'Closed Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: false,
      isClosable: true,
      isFullscreenable: false
    },
    {
      title: 'Card With Fullscreen Button',
      subtitle: 'FullScreen Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: false,
      isClosable: false,
      isFullscreenable: true
    }
  ];

  alignmentCards = [
    {
      title: 'Where it come from',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/15.jpg',
      alignmentClass: '' 
    },
    {
      title: 'What is special?',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/11.jpg',
      alignmentClass: 'text-end'
    },
    {
      title: 'Why do we use it?',
      text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/3.jpg',
      alignmentClass: 'text-center' 
    }
  ];


  navigationCards = [
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Go somewhere',
      tabType: 'nav-tabs', // Indicates the type of tabs (tabs or pills)
      tabs: [
        { label: 'Active', link: 'javascript:void(0);', active: true, disabled: false },
        { label: 'Link', link: 'javascript:void(0);', active: false, disabled: false },
        { label: 'Disabled', link: '', active: false, disabled: true }
      ]
    },
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Go somewhere',
      tabType: 'nav-pills', // Indicates the type of tabs (tabs or pills)
      tabs: [
        { label: 'Active', link: 'javascript:void(0);', active: true, disabled: false },
        { label: 'Link', link: 'javascript:void(0);', active: false, disabled: false },
        { label: 'Disabled', link: '', active: false, disabled: true }
      ]
    }
  ];

  imagecard = [
    {
      imgSrc: './assets/images/media/media-29.jpg',
      imgPosition: 'top' as 'top' | 'bottom' | undefined, // Explicitly cast
      title: "Image caps are widely used in Blog's",
      bodyText:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
      footerText: 'Last updated 3 mins ago',
      FooterPosition: 'bottom' as 'top' | 'bottom' | 'middle'| undefined, // Explicitly cast
      hasHeader: false,
      headerText: '',
      FoolterClass: 'border-0 pt-0'
    },
    {
      imgSrc: './assets/images/media/media-28.jpg',
      imgPosition: 'bottom' as 'top' | 'bottom' | undefined, // Explicitly cast
      title: "Image caps are widely used in Blog's",
      bodyText:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.',
      footerText: 'Last updated 3 mins ago',
      hasHeader: false,
      headerText: '',
       FoolterClass: 'border-0 pt-0',
      FooterPosition: 'middle' as 'bottom' | 'bottom' | 'middle'| undefined, // Explicitly cast
    },
    {
      imgSrc: './assets/images/media/media-31.jpg',
      imgPosition: 'bottom' as 'top' | 'bottom' | undefined, // Explicitly cast
      bodyText:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footerText: 'Last updated 3 mins ago',
      hasHeader: true,
      headerText: "Image caps are widely used in Blog's",
      FooterPosition: 'bottom' as 'top' | 'bottom' | 'middle'| undefined, // Explicitly cast
       FoolterClass: ''
    },
    {
      imgSrc: './assets/images/media/media-32.jpg',
      imgPosition: 'top' as 'top' | 'bottom' | undefined, // Explicitly cast
      bodyText:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footerText: 'Last updated 3 mins ago',
      hasHeader: true,
      headerText: "Image caps are widely used in Blog's",
      FooterPosition: 'bottom' as 'top' | 'bottom' | 'middle'| undefined, // Explicitly cast
       FoolterClass: ''
    },
    {
      imgSrc: './assets/images/media/media-30.jpg',
      imgPosition: 'bottom' as 'top' | 'bottom' | undefined, // Explicitly cast
      title: "Image caps are widely used in Blog's",
      bodyText:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footerText: 'Last updated 3 mins ago',
      hasHeader: false,
      headerText: '',
      FooterPosition: 'bottom' as 'top' | 'bottom' | 'middle'| undefined, // Explicitly cast
      FoolterClass: ''
    },
    {
      imgSrc: './assets/images/media/media-33.jpg',
      imgPosition: 'bottom' as 'top' | 'bottom' | undefined, // Explicitly cast
      bodyText:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footerText: 'Last updated 3 mins ago',
      hasHeader: true,
      headerText: "Image caps are widely used in Blog's",
      FooterPosition: 'middle' as 'top' | 'bottom' | 'middle'| undefined, // Explicitly cast
      FoolterClass: ''
    }
  ];
  overlayCards = [
    {
      imgSrc: './assets/images/media/media-35.jpg',
      headerText: 'Image Overlays Are Awesome!',
      bodyText: `
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even.`,
      footerText: '',
      bodyAdditionalText: 'Last updated 3 mins ago',
      scrollable: true,
      hasFooter: false
    },
    {
      imgSrc: './assets/images/media/media-36.jpg',
      headerText: '',
      bodyText: `
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even.`,
      footerText: 'Last updated 3 mins ago',
      bodyAdditionalText: 'Image Overlays Are Awesome!',
      scrollable: false,
      hasFooter: true
    },
    {
      imgSrc: './assets/images/media/media-34.jpg',
      headerText: 'Image Overlays Are Awesome!',
      bodyText: `
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even.`,
      footerText: 'Last updated 3 mins ago',
      bodyAdditionalText: '',
      scrollable: true,
      hasFooter: true
    }
  ];
  horizontalCards = [
    {
      imgSrc: './assets/images/media/media-37.jpg',
      imgPosition: 'left' as 'left' | 'right',
      headerTitle: 'Horizontal Cards',
      bodyTitle: 'Horizontal cards are awesome!',
      bodyText: 'This is a wider card with supporting text below as a natural.',
      footerText: 'Last updated 3 mins ago'
    },
    {
      imgSrc: './assets/images/media/media-38.jpg',
      imgPosition: 'right' as 'right' | 'left',
      headerTitle: 'Horizontal Cards',
      bodyTitle: 'Horizontal cards are awesome!',
      bodyText: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      footerText: 'Last updated 3 mins ago'
    },
    {
      imgSrc: './assets/images/media/media-39.jpg',
      imgPosition: 'right' as 'right' | 'left',
      headerTitle: 'Horizontal Cards',
      bodyTitle: 'Horizontal cards are awesome!',
      bodyText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footerText: 'Last updated 3 mins ago'
    }
  ];

  groupCard = [
    {
      imageUrl: './assets/images/media/media-40.jpg',
      title: 'Delicious food is a blessing!',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footer: 'Last updated 3 mins ago'
    },
    {
      imageUrl: './assets/images/media/media-42.jpg',
      title: 'Writing is an art.',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has longer content than first to show equal height action.',
      footer: 'Last updated 3 mins ago'
    },
    {
      imageUrl: './assets/images/media/media-41.jpg',
      title: 'Is office the best place to earn knowledge?',
      text: 'This card has supporting text below as a natural lead-in to additional content.This card has longer content',
      footer: 'Last updated 3 mins ago'
    }
  ];

  gridCards = [
    {
      imageUrl: './assets/images/media/media-43.jpg',
      title: 'Morphology of a typical fruit.',
    },
    {
      imageUrl: './assets/images/media/media-44.jpg',
      title: 'Research improves ability & agility!',
    },
    {
      imageUrl: './assets/images/media/media-45.jpg',
      title: 'Most tropical areas are suitable',
    },
    {
      imageUrl: './assets/images/media/media-46.jpg',
      title: 'Are They seasonal fruits?',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    }
  ];

  linkCard = [
      {
        imageUrl: './assets/images/media/media-23.jpg',
        title: '',
        text: 'Forests are Awesome.'
      },
    
  ] ;
  
  linkCard1 = [
    {
      imageUrl: './assets/images/media/media-23.jpg',
      title: '',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
  
] ;

linkCard2 = [
  {
    title: '',
    text1:'It is a long established fact that a reader will be distracted by the readable content',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  }

] ;

  areaCard = [
    {
      imageUrl: './assets/images/media/media-47.jpg',
      title: 'Most tropical areas are suitable',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
    },
  
]

foxCards = [
  {
    title: 'Fox is Beautiful ?',
    body: 'This is a wild animal with supporting tactics and are very efficient at kill,they are very Dangerous..,Fox lives mainly in forests and are well known for their hunting skills.',
    lastUpdated: 'Last updated 3 mins ago',
    imageUrl: './assets/images/media/media-39.jpg',
    imagePlacementEnd:true,
    imagePlacementStart:false

  },
]

Gapcards = [
  {
    imgSrc: './assets/images/media/media-29.jpg',
    imgPosition: 'top' as 'top' | 'bottom' | 'none',
    title: "Image caps are widely used in Blog's",
    bodyText:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    footerText: 'Last updated 3 mins ago',
    hasHeader: false
  },
  {
    imgSrc: './assets/images/media/media-28.jpg',
    imgPosition: 'bottom' as 'top' | 'bottom' | 'none',
    title: "Image caps are widely used in Blog's",
    bodyText:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    footerText: 'Last updated 3 mins ago',
    hasHeader: false
  },
  {
    imgSrc: './assets/images/media/media-31.jpg',
    imgPosition: 'top' as 'top' | 'bottom' | 'none',
    title: "Image caps are widely used in Blog's",
    headerText: "Image caps are widely used in Blog's",
    hasHeader: true,
    bodyText:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    footerText: 'Last updated 3 mins ago'
  }
];

users = [
  {
    cardClass: 'box-bg-primary',
    avatar: './assets/images/faces/11.jpg',
    name: 'Gatin Leo',
    status: 'Finished by today',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-primary1',
    avatar: './assets/images/faces/11.jpg',
    name: 'Gatin Leo',
    status: 'Finished by today',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-primarytint2color ',
    avatar: './assets/images/faces/11.jpg',
    name: 'Gatin Leo',
    status: 'Finished by today',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-primarytint3color ',
    avatar: './assets/images/faces/11.jpg',
    name: 'Gatin Leo',
    status: 'Finished by today',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-secondary',
    avatar: './assets/images/faces/12.jpg',
    name: 'Elisha Corner',
    status: 'Completed 24 days back',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-warning',
    avatar: './assets/images/faces/1.jpg',
    name: 'Sarah Alina',
    status: 'Completed today',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-info',
    avatar: './assets/images/faces/8.jpg',
    name: 'Monica Karen',
    status: 'Pending from 4 days',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-success',
    avatar: './assets/images/faces/5.jpg',
    name: 'Samantha Sid',
    status: 'In leave for 1 month',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-danger',
    avatar: './assets/images/faces/14.jpg',
    name: 'Sebastien Steyn',
    status: 'Completed by Tomorrow',
    statusClass: 'text-white',
    anchorClass: 'text-white'
  },
  {
    cardClass: 'box-bg-light',
    avatar: './assets/images/faces/13.jpg',
    name: 'Jacob Smith',
    status: 'Finished by 24, Nov',
    statusClass: 'text-textmuted dark:text-textmuted/50',
    anchorClass: 'text-defaulttextcolor'
  },
  {
    cardClass: 'box-bg-dark',
    avatar: './assets/images/faces/16.jpg',
    name: 'Pope Adam',
    status: 'Completed on 24, May',
    statusClass: 'text-white dark:!text-black',
    anchorClass: 'text-white dark:!text-black'
  }
];


BorderCard = [
  {
    CustomCardClass: 'primary',
    Title: 'Home Page Design',
    Navigate: '/home',
    Class: 'primary',
    Badges: [
      { text: 'Framework', className: 'bg-primary/10 text-primary' },
      { text: 'Angular', className: 'bg-secondary/10 text-secondary' },
      { text: 'Php', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
      './assets/images/faces/2.jpg'
    ]
  },
  {
    CustomCardClass: 'primarytint1color ',
    Title: 'Home Page Design',
    Navigate: '/home',
    Class: 'primary',
    Badges: [
      { text: 'Framework', className: 'bg-primary/10 text-primary' },
      { text: 'Angular', className: 'bg-secondary/10 text-secondary' },
      { text: 'Php', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
      './assets/images/faces/2.jpg'
    ]
  },
  {
    CustomCardClass: 'primarytint2color ',
    Title: 'Home Page Design',
    Navigate: '/home',
    Class: 'primary',
    Badges: [
      { text: 'Framework', className: 'bg-primary/10 text-primary' },
      { text: 'Angular', className: 'bg-warning/10 text-warning' },
      { text: 'Php', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
    ]
  },
  {
    CustomCardClass: 'primarytint3color ',
    Title: 'Home Page Design',
    Navigate: '/home',
    Class: 'primary',
    Badges: [
      { text: 'Framework', className: 'bg-primary/10 text-primary' },
      { text: 'Angular', className: 'bg-secondary/10 text-secondary' },
      { text: 'Php', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
      './assets/images/faces/2.jpg'
    ]
  },
  {
    CustomCardClass: 'secondary',
    Title: 'Landing Page Design',
    Navigate: '/landing',
    Class: 'secondary',
    Badges: [
      { text: 'Laravel', className: 'bg-danger/10 text-danger' },
      { text: 'Codeignitor', className: 'bg-teal/10 text-tealmain' },
      { text: 'Php', className: 'bg-success/10 text-success' }
    ],
    Images: [
      './assets/images/faces/4.jpg',
      './assets/images/faces/6.jpg'
    ]
  },
  {
    CustomCardClass: 'warning',
    Title: 'Update New Project',
    Navigate: '/update-project',
    Class: 'warning',
    Badges: [
      { text: 'HTML', className: 'bg-warning/10 text-warning' },
      { text: 'Tailwind', className: 'bg-secondary/10 text-secondary' },
      { text: 'React', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/1.jpg',
      './assets/images/faces/12.jpg',
      './assets/images/faces/10.jpg',
      './assets/images/faces/16.jpg'
    ]
  },
  {
    CustomCardClass: 'info',
    Title: 'New Project Discussion',
    Navigate: '/new-project',
    Class: 'info',
    Badges: [
      { text: 'React', className: 'bg-info/10 text-info' },
      { text: 'TypeScript', className: 'bg-primary/10 text-primary' }
    ],
    Images: [
      './assets/images/faces/3.jpg',
      './assets/images/faces/14.jpg',
      './assets/images/faces/11.jpg'
    ]
  },
  {
    CustomCardClass: 'danger',
    Title: 'Recent Projects Testing',
    Navigate: '/about-us',
    Class: 'danger',
    Badges: [
      { text: 'HTML', className: 'bg-primary/10 text-primary' },
      { text: 'Symphony', className: 'bg-secondary/10 text-secondary' },
      { text: 'Php', className: 'bg-info/10 text-info' }
    ],
    Images: [
      './assets/images/faces/6.jpg',
    ]
  },
  {
    CustomCardClass: 'success',
    Title: 'About Us Page Redesign',
    Navigate: '/about-us',
    Class: 'success',
    Badges: [
      { text: 'HTML', className: 'bg-danger/10 text-danger' },
      { text: 'Symphony', className: 'bg-warning/10 text-warning' },
      { text: 'Php', className: 'bg-success/10 text-success' }
    ],
    Images: [
      './assets/images/faces/6.jpg',
      './assets/images/faces/9.jpg'
    ]
  },
  {
    CustomCardClass: 'light',
    Title: 'New Employees',
    Navigate: '/terminated',
    Class: 'dark',
    Badges: [
      { text: 'HTML', className: 'bg-warning/10 text-warning' },
      { text: 'Cake Php', className: 'bg-info/10 text-info' },
      { text: 'React', className: 'bg-success/10 text-success' }
    ],
    Images: [
      './assets/images/faces/9.jpg',
      './assets/images/faces/11.jpg',
      './assets/images/faces/12.jpg',
    ]
  },
  {
    CustomCardClass: 'dark',
    Title: 'Terminated Employees',
    Navigate: '/terminated',
    Class: 'dark',
    Badges: [
      { text: 'Angular', className: 'bg-primary/10 text-primary' }
    ],
    Images: [
      './assets/images/faces/9.jpg',
      './assets/images/faces/11.jpg',
      './assets/images/faces/12.jpg',
      './assets/images/faces/15.jpg'
    ]
  }
];
UtilitiesData = [
  {
    widthClass: 'w-[75%]',
    title: 'Using Width 75%',
    bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi consequatur molestiae.',
    buttonText: 'Button 1'
  },
  {
    widthClass: 'w-[50%]',
    title: 'Using Width 50%',
    bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    buttonText: 'Button 2'
  }
];

}
