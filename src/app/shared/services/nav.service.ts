import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?:string;
  dirchange?: boolean;
  nochild?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
    { headTitle: 'Main' },
    {
      title: 'Dashboards',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>`,
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        { path: '/dashboards/sales', title: 'Sales', type: 'link', dirchange: false },
        {
          path: '/dashboards/analytics',
          title: 'Analytics',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/ecommerce',
          title: 'Ecommerce',
          type: 'link',
          dirchange: false,
        },
       
        {
          path: '/dashboards/crm',
          title: 'CRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/crypto',
          title: 'Crypto',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/nft',
          title: 'NFT',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/projects',
          title: 'Projects',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/jobs',
          title: 'Jobs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/hrm',
          title: 'HRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/courses',
          title: 'Courses',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/stocks',
          title: 'Stocks',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/medical',
          title: 'Medical',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/pos-system',
          title: 'pos-system',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/podcast',
          title: 'Podcast',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/school',
          title: 'School',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/social-media',
          title: 'Social Media',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    { headTitle: 'Web Apps' },
    {
      title: 'Apps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Ecommerce',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/ecommerce/add-product',
              title: 'Add Product',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/cart',
              title: 'Cart',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/checkout',
              title: 'Check out',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/edit-product',
              title: 'Edit Product',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/order-details',
              title: 'Order Details',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/orders',
              title: 'Orders',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/products',
              title: 'Products',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/product-details',
              title: 'Product Details',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/products-list',
              title: 'Products List',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/wishlist',
              title: 'Wishlist',
              type: 'link',
               dirchange: false,
            },
          ],
        },
        {
          path: '/apps/full-calender',
          title: 'Full Calender',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/gallery',
          title: 'Gallery',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/sweet-alerts',
          title: 'Sweet-alerts',
          type: 'link',
          dirchange: false,
        },
        
       
        {
          title: 'Projects',
          type: 'sub',
          badgeClass: 'secondary',
          badgeText: 'secondary',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/projects/projects-list',
              title: 'Projects List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/project-overview',
              title: 'Project Overview',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/create-project',
              title: 'Create Project',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Tasks',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/tasks/kanban-board',
              title: 'Kanban Board',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/tasks/task-list-view',
              title: 'Task list View',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/tasks/task-details',
              title: 'Task Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Jobs',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/jobs/job-details',
              title: 'Job Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-company',
              title: 'Search Company',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-jobs',
              title: 'Search Jobs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/job-post',
              title: 'Job Post',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/jobs-list',
              title: 'Jobs List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-candidate',
              title: 'Search Candidate',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/candidate-details',
              title: 'Candidate Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'NFT',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/nft/market-place',
              title: 'Market place',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/nft-details',
              title: 'NFT Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/create-nft',
              title: 'Create NFT',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/wallet-integration',
              title: 'Wallet Integration',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/live-auction',
              title: 'Live auction',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'CRM',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crm/contacts',
              title: 'Contacts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/companies',
              title: 'Companies',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/deals',
              title: 'Deals',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/leads',
              title: 'Leads',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Crypto',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crypto/transactions',
              title: 'Transactions',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/currency-exchange',
              title: 'Currency Exchange',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/buy-sell',
              title: 'Buy & Sell',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/marketcap',
              title: 'Marketcap',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/wallet',
              title: 'Wallet',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Nested Menu',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path> </svg>`,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Nested-1',
          dirchange: false,
          type: 'empty',
          active: false,
          selected: false,
          path: '/nested-menu/nested-1',
        },
        {
          title: 'Nested-2',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Nested-2.1',
              type: 'empty',
              active: false,
            },
            {
              title: 'Nested-2.2',
              type: 'empty',
              active: false,
            },
          ],
        },
      ],
    },
    { headTitle: 'Crafted' },
    {
      title: 'Authentication',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path> </svg>`,
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Coming Soon',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/authentication/coming-soon',
        },
        {
          title: 'Create Password',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/create-password/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/create-password/cover',
            },
          ],
        },
        {
          title: 'Lock Screen',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/lock-screen/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/lock-screen/cover',
            },
          ],
        },
        {
          title: 'Reset Password',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/reset-password/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/reset-password/cover',
            },
          ],
        },
      
        {
          title: 'Sign Up',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/sign-up/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/sign-up/cover',
            },
          ],
        },
        {
          title: 'Sign In',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/sign-in/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/sign-in/cover',
            },
          ],
        },
        {
          title: 'Two Step Verification',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Basic',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/two-step-verification/basic',
            },
            {
              title: 'Cover',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/authentication/two-step-verification/cover',
            },
          ],
        },
        {
          title: 'Under Maintanace',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/authentication/under-maintanace',
        },
      ],
    },
    {
      title: 'Error',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Error 401',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/error/error401',
        },
        {
          title: 'Error 404',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/error/error404',
        },
        {
          title: 'Error 500',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/error/error500',
        },
      ],
    },
    {
      title: 'Pages',
      type: 'sub',
      active: false,
      selected: false,
      dirchange: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"></path> </svg>`,
      children: [
        {
          title: 'Blog',
          type: 'sub',
          active: false,
          dirchange: false,
          selected: false,
          children: [
            {
              path: '/pages/blog/blog',
              title: 'Blog',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/blog-details',
              title: 'Blog Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/create-blog',
              title: 'Create Blog',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/chat',
          title: 'Chat',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Email',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/email/mailapp',
              title: 'Mail App',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/email/mail-settings',
              title: 'mail Settings',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/empty',
          title: 'Empty',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/faqs',
          title: "FAQ's",
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/file-manager',
          title: "File Manager",
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Invoice',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/invoice/create-invoice',
              title: 'Create Invoice',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-details',
              title: 'Invoice Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-list',
              title: 'Invoice List',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/pricing',
          title: 'Pricing',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/profile',
          title: 'Profile',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/profile-settings',
          title: 'Profile Settings',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/landing-page',
          title: 'Landing Page',
          active: false,
          selected: false,
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/reviews',
          title: 'Reviews',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/search',
          title: 'Search',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/team',
          title: 'Team',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/terms-conditions',
          title: 'Terms & Conditions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/timeline',
          title: 'Timeline',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/todo-list',
          title: 'To Do List',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    { headTitle: 'Modules' },
    {
      title: 'Forms',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Form Advanced',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/form-advanced',
        },
        {
          title: 'Form Elements',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Inputs',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/inputs',
            },
            {
              title: 'Checks & Radios',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/checks-radios',
            },
            {
              title: 'Input Groups',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/input-groups',
            },
            {
              title: 'Form Select',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/form-select',
            },
            {
              title: 'Range Sliders',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/range-sliders',
            },
            {
              title: 'Input Masks',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/input-masks',
            },
            {
              title: 'File Uploads',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/file-uploads',
            },
            {
              title: 'Date,Time Picker',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/date-time-picker',
            },
            {
              title: 'Color Pickers',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/color-pickers',
            },
          ],
        },
        {
          title: 'Form Layouts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/form-layouts',
        },
        {
          title: 'Form Editors',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Angular Editor',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-editors/angular-editor',
            },
          ],
        },
        {
          title: 'Validation',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/validation',
        },
        {
          title: 'Ng select',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/ng-select',
        },
      ],
    },
    {
      title: 'Ui Elements',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/ui-elements/alerts',
          title: 'Alerts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/badge',
          title: 'Badge',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/breadcrumb',
          title: 'Breadcrumb',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/buttons',
          title: 'Buttons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/button-group',
          title: 'Button Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/cards',
          title: 'cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/dropdowns',
          title: 'DropDowns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/images&figures',
          title: 'Images & Figures',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/list-group',
          title: 'List Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/nav-tabs',
          title: 'Navs & Tabs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/objectfit',
          title: 'Object Fit',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/pagination',
          title: 'Pagination',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/popovers',
          title: 'Popovers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/progress',
          title: 'Progress',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/spinners',
          title: 'Spinners',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/toasts',
          title: 'Toasts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/tooltips',
          title: 'Tooltips',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Advanced Ui',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/advanced-ui/accordions',
          title: 'Accordions & Collapse',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/draggable-cards',
          title: 'Draggable Cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/media-player',
          title: 'Media Player',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/modals-closes',
          title: 'Models & Closes',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/navbar',
          title: 'Navbar',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/offcanvas',
          title: 'OffCanvas',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ratings',
          title: 'Ratings',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ribbons',
          title: 'Ribbons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/scrollspy',
          title: 'Scrollspy',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/sortable-js',
          title: 'Sortable JS',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/swiperjs',
          title: 'Swiper JS',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/tour',
          title: 'Tour',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Utilites',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/utilities/avatars',
          title: 'Avatars',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/borders',
          title: 'Borders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/colors',
          title: 'Colors',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/columns',
          title: 'Columns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/css-grid',
          title: 'Css Grid',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/flex',
          title: 'Flex',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      path: 'widgets',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path> </svg>`,
      title: 'Widgets',
      type: 'link',
      selected: false,
      active: false,
      dirchange: false,
    },
    
    { headTitle: 'Tools & components' },
    {
      title: 'Maps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"></path> </svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/maps/leaflet-maps',
          title: 'Leaflet Maps',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/maps/google-map',
          title: 'Google Map',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path> </svg>`,
      path: 'icons',
      title: 'Icons',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Charts',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path> </svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Apex Charts',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/charts/apex-charts/line-charts',
              title: 'Line Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/area-charts',
              title: 'Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/column-charts',
              title: 'Column Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bar-charts',
              title: 'Bar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/mixed-charts',
              title: 'Mixed Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/range-area-charts',
              title: 'Range Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/timeline-charts',
              title: 'TimeLine Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/candlestick-charts',
              title: 'CandleStick Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/boxplot-charts',
              title: 'BoxPlot Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bubble-charts',
              title: 'Bubble charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/scatter-charts',
              title: 'Scatter Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/heatmap-charts',
              title: 'Heatmap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/treemap-charts',
              title: 'TreeMap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/pie-charts',
              title: 'Pie Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radialbar-charts',
              title: 'Radialbar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radar-charts',
              title: 'Radar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/polararea-charts',
              title: 'Polararea Charts',
              type: 'link',
              dirchange: false,
            },
          ],
        },
          {
          title: 'Chartjs Charts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/charts/chartjs-charts',
        },
        {
          title: 'Echart Charts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/charts/echart-charts',
        },
      ],
    },
    {
      title: 'Tables',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"></path> </svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/tables/tables',
          title: 'Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/angular-material-table',
          title: 'Angular material Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/ngx-easy-table',
          title: 'Ngx Easy Table',
          type: 'link',
          dirchange: false,
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
