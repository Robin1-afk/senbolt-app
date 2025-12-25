import { CommonModule, ViewportScroller } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { SpkGlanceCardsComponent } from '../../../../@spk/reusable-landing-card/spk-glance-cards/spk-glance-cards.component';
import { SpkServicesCardComponent } from '../../../../@spk/reusable-landing-card/spk-services-card/spk-services-card.component';
import { SpkTeamCardComponent } from '../../../../@spk/reusable-landing-card/spk-team-card/spk-team-card.component';
import { SpkPricingCardComponent } from '../../../../@spk/reusable-landing-card/spk-pricing-card/spk-pricing-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppStateService } from '../../../shared/services/app-state.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ColorPickerModule,CommonModule,SpkGlanceCardsComponent,SpkServicesCardComponent,SpkTeamCardComponent,SpkPricingCardComponent,FormsModule,RouterModule],
  providers:[ ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  
  isYearly: boolean = false;
  
    onToggle() {
    }
  thumbsSwiper: any;
  constructor(
    public renderer: Renderer2,
    private appStateService: AppStateService,
    private el: ElementRef,
    private elementRef: ElementRef,private sanitizer: DomSanitizer,private viewScroller: ViewportScroller
  ){
    document.body.classList.add('landing-body');
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
  this.renderer.setAttribute(htmlElement, 'class', 'light');
  this.renderer.removeAttribute(htmlElement, 'data-header-styles');
  this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
  this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
  this.renderer.removeAttribute(htmlElement, 'loader');
  this.renderer.removeAttribute(htmlElement, 'data-width');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb2');
  this.renderer.removeAttribute(htmlElement, 'light-rgb');
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  htmlElement.removeAttribute('style');

  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		 pagination:{
      clickable:true
     },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			500: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1400: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			
		  },
	  });
	}

  input1: string = "#00897B";
scrolled: boolean = false;
  SwitcherService: any;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  body!: HTMLBodyElement | null;

  color1 = '#845adf';
  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;
  
    const dynamicPrimaryLight = document.querySelectorAll(
      'button.pcr-button'
    );
  
    this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
    localStorage.setItem('xintra-primary-mode', this.hexToRgba(this.color1) || '');
    localStorage.setItem('xintralight-mode', 'true');
    this.body?.classList.remove('transparent-mode');
  
    // Adding
    this.body?.classList.add('light-mode');
  
    // Removing
    this.body?.classList.remove('dark');
    this.body?.classList.remove('bg-img1');
  
  }
  handleThemeUpdate(cssVars: any) {
    const root: any = document.querySelector(':root');
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
   isValidHex = (hexValue: any) =>
    /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  
   getChunksFromString = (st: any, chunkSize: any) =>
    st.match(new RegExp(`.{${chunkSize}}`, 'g'));
  // convert hex value to 256
   convertHexUnitTo256 = (hexStr: any) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  hexToRgba(hexValue: any) {
    if (!this.isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
    return `${r}, ${g} ,${b}`;
  }
  //primary theme color
 dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--primary-rgb`;
    const cssPropName2 = `--primary`;
    const cssPropName3 = `--color-primary-rgb`;

    this.handleThemeUpdate({
      [cssPropName1]: this.hexToRgba(color),
      [cssPropName2]: this.hexToRgba(color),
      [cssPropName3]: this.hexToRgba(color),
    });
  });
}
localStorageBackUp() {
  let html = document.querySelector('html');
 
  

  if (localStorage.getItem('dir') == 'rtl') {
    html?.setAttribute("dir", 'rtl');
  }
  if (localStorage.getItem('xintradarktheme')) {
    const type: any = localStorage.getItem('xintradarktheme');
    html?.setAttribute('class', type);
   
  }
  if (localStorage.getItem("xintra-primary-mode")) { 
    const type: any = localStorage.getItem("xintra-primary-mode");
    html?.style.setProperty('--primary-rgb', type);
    html?.style.setProperty('--primary', type);
  }
}
public show: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);
  
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  isActive: boolean = false;
scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
  this.isActive = true; 
}
isDataToggled = false;
 
  expande = false;
  expande1 = false;
  expande2 = false;

  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }

  ngOnInit(): void {
    this.localStorageBackUp();
  }
  ngOnDestroy(): void {
    document.body.classList.remove('landing-body');    
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  localStorage.removeItem('xintraHeader');
  localStorage.removeItem('xintraMenu');
  localStorage.removeItem('xintradarktheme');
  } 
  themeChange(type: string, type1: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('xintraHeader', type1);
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
    localStorage.setItem('xintraMenu', type1);
    this.renderer.setAttribute(htmlElement, 'class', type1);
    localStorage.setItem('xintradarktheme', type1);
  }
  localdata:any=localStorage;
  //  Directions
  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('dir', type);
  }

  //Theme Primary
  primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type,
       this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
        '--primary',
        type
      )
    );
    localStorage.setItem('xintra-primary-mode', type);
    localStorage.removeItem('xintralight-primary-color');
  }

  //reset switcher

  reset() {
    localStorage.clear();
    const html: any =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const body: any = document.querySelector('body');
    html.style = '';
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-header-styles', 'light');
    html.setAttribute('data-nav-layout', 'horizontal');
    html.setAttribute('data-menu-position', 'fixed');
    html.setAttribute('class', 'light');
    html.removeAttribute('data-menu-styles');

    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
    const ltrclickchecked = document.getElementById(
      'switcher-ltr'
    ) as HTMLInputElement;
    if (ltrclickchecked) {
      ltrclickchecked.checked = true;
    }
  }
  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }
 
  slidesStore: any[] = [
    {
      img:"./assets/images/faces/8.jpg",
      name:'Elsa Teresa',
      mail:'elsateresa@gmail.com',
    },
    {
      img:"./assets/images/faces/9.jpg",
      name:'Henry Milo',
      mail:'henrymilo@gmail.com',
    },
    {
      img:"./assets/images/faces/6.jpg",
      name:'Katherin Oslo',
      mail:'katherinoslo212@gmail.com',
    },
    {
      img:"./assets/images/faces/14.jpg",
      name:'Jestin Calm',
      mail:'jestincalm1999@gmail.com',
    },
    {
      img:"./assets/images/faces/13.jpg",
      name:'Harin ford',
      mail:'harinford345@gmail.com',
    },
    {
      img:"./assets/images/faces/11.jpg",
      name:'Phillip John',
      mail:'phillipjohn21@gmail.com',
    },

  ];


  breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };
  taptotop(){
    let body:any = document.querySelector('body')
    body.style. scrollBehavior = 'smooth';
    this.viewScroller.scrollToPosition([0,0]);
  }
 
  sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  glancecards = [
    {
      title: 'Responsive and Accessible',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                                    <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                                    </path>
                                                </svg>`,
      bgColorClass: 'primary',
      borderColorClass: 'border-primary'
    },
    {
      title: 'Continuous Updates and Support',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>`,
      bgColorClass: 'primarytint1color',
      borderColorClass: 'border-primarytint1color'
    },
    {
      title: 'Design and Customization',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path></svg>`,
      bgColorClass: 'primarytint2color',
      borderColorClass: 'border-primarytint2color'
    }
  ];

  basicAccordions=[
    { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFour', 
        collapseId: 'collapseFour' ,
        collapsed: true
       },
       {
        title: 'General Terms & Conditions (GTC)', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFive', 
        collapseId: 'collapseFive' ,
        collapsed: true
       },
       {
        title: 'Do I need to create an account to make an order?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: true
       }
  ]
  basicAccordions1=[
    {
      title: 'General Terms & Conditions (GTC)', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: true
     },
     {
      title: 'Do I need to create an account to make an order?', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingTwo', 
      collapseId: 'collapseTwo',
      collapsed: true
     },
     { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingThree', 
      collapseId: 'collapseThree' ,
      collapsed: true
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFour', 
       collapseId: 'collapseFour' ,
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFive', 
       collapseId: 'collapseFive' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: false
       },
  ]
  servicecards = [
    {
      title: 'Responsive Design',
      description: 'Ensures the template is optimized for various screen sizes and devices, enhancing usability.',
      bgColor: 'primary',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      title: 'Pre-built Components',
      description: 'Ready-made UI components such as buttons, forms, tables, charts, and modals.',
      bgColor: 'primarytint1color',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      title: 'Customization Options',
      description: 'Ability to customize colors, fonts, layouts, and other visual elements to match your brand.',
      bgColor: 'primarytint2color',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation that guides you through installation, customization.',
      bgColor: 'primarytint3color',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`

    },
    {
      title: 'Support',
      description: 'Access to support forums, ticket systems, or direct support from the template provider.',
      bgColor: 'secondary',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      title: 'Updates and Maintenance',
      description: 'Regular updates to ensure compatibility with the latest web technologies and bug fixes.',
      bgColor: 'info',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`

    },
    {
      title: 'Multiple Layout',
      description: 'Different layout styles (sidebar navigation, top navigation) to suit different types of applications.',
      bgColor: 'warning',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      title: 'Performance Optimization',
      description: 'Code optimized for performance, including lazy loading of assets, CSS and JS files.',
      bgColor: 'success',
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    }
  ];
  teamMembers = [
    {
      name: 'Hadley Kylin',
      role: 'Director',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
      image: './assets/images/faces/1.jpg',
      backgroundColor: 'teal',
      badgeColor: 'primary',
      teamClass:"mt-4",
      bodyClass:"p-4",
      class1:"mb-4"
    },
    {
      name: 'Owen Foster',
      role: 'Board Director',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
      image: './assets/images/faces/8.jpg',
      backgroundColor: 'teal',
      badgeColor: 'primarytint1color ',
      teamClass:"mt-4",
      bodyClass:"p-4",
      class1:"mb-4"

    },
    {
      name: 'Stephen Roy',
      role: 'Creative Director',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
      image: './assets/images/faces/11.jpg',
      backgroundColor: 'success',
      badgeColor: 'primarytint2color ',
      teamClass:"mt-4",
      bodyClass:"p-4",
      class1:"mb-4"

    },
    {
      name: 'Jasmine Della',
      role: 'Board Director',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
      image: './assets/images/faces/4.jpg',
      backgroundColor: 'orange',
      badgeColor: 'primarytint3color ',
      teamClass:"mt-4",
      bodyClass:"p-4",
      class1:"mb-4"

    }
  ];
  pricings=[
    {
     title:"Premium",
     mainClass:"hover !bg-primary",
     borderClass:"border-white",
     footerClass:"border-t border-dashed border-white/10",
     buttonClass:"bg-white !text-black",
     price:"$22.89",
     pricingPlan:"Month",
     textColor:" text-white",
     bodyClass:"p-3 text-white",
     priceClass:"mb-3 text-white",
     arrowClass:"op-8",
     description:"Unlock powerful tools tailored for seasoned users, designed to take your skills to the next level.",
     features:[
      { text: 'Unlimited users', badge: 'Unlimited',badgeClass:'badge bg-success rounded-pill' },
      { text: 'Advanced analytics' },
      { text: 'Customizable dashboards',icon:'white' },
      { text: 'Phone support' },
      { text: 'Dedicated account manager' },
      { text: 'SLA guarantees', badge: '30 Days',badgeClass:'op-5 fs-12 fw-medium' },
      { text: 'On-site training for teams', badge: '120 Days',badgeClass:'op-5 fs-12 fw-medium' }
  ],
  popular:true
    },
    {
      title: 'Basic',
      price: "$8.5",
     arrowClass:"text-primary",
     buttonClass:"ti-btn-primary",
     bodyClass:"p-3",
     borderClass:"border-defaultborder",
     priceClass:"mb-3",
     pricingPlan:"Month",
      description: 'Discover the vital features that create an enchanting foundation for a magical beginning.',
      features: [
        { text: 'Up to 10 users', badge: 'New',badgeClass:'badge bg-primarytint2color rounded-pill' },
        { text: 'Community access' },
        { text: 'Basic reporting',icon:'info' },
        { text: 'Email support' },
        { text: 'Community access' },
        { text: 'Access to essential features', badge: '12 Days',badgeClass:'text-muted fs-12 fw-medium' },
        { text: 'Mobile app access', badge: '45 Days',badgeClass:'text-muted fs-12 fw-medium' }
      ],
  popular:false
  
    },
    {
      title: 'Standard',
      price: "$29.99",
      arrowClass:"text-primary",
      buttonClass:"ti-btn-primary",
      bodyClass:"p-3",
      pricingPlan:"Month",
      borderClass:"border-defaultborder",
      priceClass:"mb-3",
      description: 'Elevate to the highest standards with unparalleled excellence and exclusive top-tier support.',
      features: [
        { text: 'Up to 50 users', badge: 'New',badgeClass:'badge bg-primarytint2color  rounded-pill' },
        { text: 'Access to webinars' },
        { text: 'Advanced reporting',icon:'info' },
        { text: 'Priority email support' },
        { text: '24/7 chat support' },
        { text: 'All Standard features', badge: '52 Days',badgeClass:'text-muted fs-12 fw-medium' },
        { text: 'Team collaboration tools', badge: '60 Days',badgeClass:'text-muted fs-12 fw-medium' }
      ],
  popular:false
  
    },
  ]
  yearlyPricings=[
    {
     title:"Premium",
     mainClass:"hover !bg-primary",
     borderClass:"border-white",
     footerClass:"border-t border-dashed border-white/10",
     buttonClass:"bg-white !text-black",
     price:"$1,999.89",
     pricingPlan:"Annum",
     textColor:" text-white",
     bodyClass:"p-3 text-white",
     priceClass:"mb-3 text-white",
     arrowClass:"op-8",
     description:"Unlock powerful tools tailored for seasoned users, designed to take your skills to the next level.",
     features:[
      { text: 'Unlimited users', badge: 'Unlimited',badgeClass:'badge bg-success rounded-pill' },
      { text: 'Advanced analytics' },
      { text: 'Customizable dashboards',icon:'white' },
      { text: 'Phone support' },
      { text: 'Dedicated account manager' },
      { text: 'SLA guarantees', badge: '30 Days',badgeClass:'op-5 fs-12 fw-medium' },
      { text: 'On-site training for teams', badge: '120 Days',badgeClass:'op-5 fs-12 fw-medium' }
  ],
  popular:true
    },
    {
      title: 'Basic',
      price: "$899.96",
     arrowClass:"text-primary",
     buttonClass:"ti-btn-primary",
     bodyClass:"p-3",
     borderClass:"border-defaultborder",
     priceClass:"mb-3",
     pricingPlan:"Annum",
      description: 'Discover the vital features that create an enchanting foundation for a magical beginning.',
      features: [
        { text: 'Up to 10 users', badge: 'New',badgeClass:'badge bg-primarytint2color  rounded-pill' },
        { text: 'Community access' },
        { text: 'Basic reporting',icon:'info' },
        { text: 'Email support' },
        { text: 'Community access' },
        { text: 'Access to essential features', badge: '12 Days',badgeClass:'text-muted fs-12 fw-medium' },
        { text: 'Mobile app access', badge: '45 Days',badgeClass:'text-muted fs-12 fw-medium' }
      ],
  popular:false
  
    },
    {
      title: 'Standard',
      price: "$589.99",
      arrowClass:"text-primary",
      buttonClass:"ti-btn-primary",
      bodyClass:"p-3",
      pricingPlan:"Annum",
      borderClass:"border-defaultborder",
      priceClass:"mb-3",
      description: 'Elevate to the highest standards with unparalleled excellence and exclusive top-tier support.',
      features: [
        { text: 'Up to 50 users', badge: 'New',badgeClass:'badge bg-primarytint2color  rounded-pill' },
        { text: 'Access to webinars' },
        { text: 'Advanced reporting',icon:'info' },
        { text: 'Priority email support' },
        { text: '24/7 chat support' },
        { text: 'All Standard features', badge: '52 Days',badgeClass:'text-muted fs-12 fw-medium' },
        { text: 'Team collaboration tools', badge: '60 Days',badgeClass:'text-muted fs-12 fw-medium' }
      ],
  popular:false
  
    },
  ]
}
