import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[
  {
  path: 'full-calender',
  loadComponent: () =>
    import('./fullcalendar/fullcalendar.component').then((m) => m.FullcalendarComponent),
    title: 'Xintra - full Calender'
},
{
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((m) => m.GalleryComponent),
      title: 'Xintra - Gallery'
},
  {
    path: 'sweet-alerts',
    loadComponent: () =>
      import('./sweetalerts/sweetalerts.component').then((m) => m.SweetalertsComponent),
      title: 'Xintra - Sweet Alerts'
  },
  {
    path: 'ecommerce/add-product',
    loadComponent: () =>
      import('./ecommerce/add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
      title: 'Xintra - Add Product'
  },
{
  path: 'ecommerce/cart',
  loadComponent: () =>
    import('./ecommerce/cart/cart.component').then(
      (m) => m.CartComponent
    ),
    title: 'Xintra - Cart'
},
{
  path: 'ecommerce/checkout',
  loadComponent: () =>
    import('./ecommerce/check-out/check-out.component').then(
      (m) => m.CheckOutComponent
    ),
    title: 'Xintra - Checkout'
},
{
  path: 'ecommerce/edit-product',
  loadComponent: () =>
    import('./ecommerce/edit-product/edit-product.component').then(
      (m) => m.EditProductComponent
    ),
    title: 'Xintra - Edit Products'
},
{
  path: 'ecommerce/order-details',
  loadComponent: () =>
    import('./ecommerce/order-details/order-details.component').then(
      (m) => m.OrderDetailsComponent
    ),
    title: 'Xintra - Order Details'
},
{
  path: 'ecommerce/orders',
  loadComponent: () =>
    import('./ecommerce/orders/orders.component').then(
      (m) => m.OrdersComponent
    ),
    title: 'Xintra - Orders'
},
{
  path: 'ecommerce/products',
  loadComponent: () =>
    import('./ecommerce/products/products.component').then(
      (m) => m.ProductsComponent
    ),
    title: 'Xintra - Products'
},
{
  path: 'ecommerce/product-details',
  loadComponent: () =>
    import('./ecommerce/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    title: 'Xintra - Product Details'
},
{
  path: 'ecommerce/products-list',
  loadComponent: () =>
    import('./ecommerce/product-list/product-list.component').then((m) => m.ProductListComponent),
    title: 'Xintra - Products list'
},
{
  path: 'ecommerce/wishlist',
  loadComponent: () =>
    import('./ecommerce/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'Xintra - Wishlist'
},
  {
    path: 'crm/companies',
    loadComponent: () =>
      import('./crm/companies/companies.component').then((m) => m.CompaniesComponent),
      title: 'Xintra - companies'
  },
  {
    path: 'crm/contacts',
    loadComponent: () =>
      import('./crm/contacts/contacts.component').then((m) => m.ContactsComponent),
      title: 'Xintra - Contacts'
  },
  {
    path: 'crm/deals',
    loadComponent: () =>
      import('./crm/deals/deals.component').then((m) => m.DealsComponent),
      title: 'Xintra - Deals'
  },
  {
    path: 'crm/leads',
    loadComponent: () =>
      import('./crm/leads/leads.component').then((m) => m.LeadsComponent),
      title: 'Xintra - Leads'
  },
  {
    path: 'crypto/buy-sell',
    loadComponent: () =>
      import('./crypto/buy-sell/buy-sell.component').then((m) => m.BuySellComponent),
      title: 'Xintra - Buy Sell'
  },
  {
    path: 'crypto/currency-exchange',
    loadComponent: () =>
      import('./crypto/currency-exchange/currency-exchange.component').then(
        (m) => m.CurrencyExchangeComponent
      ),
      title: 'Xintra - Currency Exchange'
  },
  {
    path: 'crypto/marketcap',
    loadComponent: () =>
      import('./crypto/market-cap/market-cap.component').then(
        (m) => m.MarketCapComponent
      ),
      title: 'Xintra - Marketcap'
  },
  {
    path: 'crypto/transactions',
    loadComponent: () =>
      import('./crypto/transactions/transactions.component').then((m) => m.TransactionsComponent),
      title: 'Xintra - Transactions'
  },
  {
      path: 'crypto/wallet',
      loadComponent: () =>
        import('./crypto/wallet/wallet.component').then((m) => m.WalletComponent),
        title: 'Xintra - Wallet'
    },
    {
      path: 'jobs/candidate-details',
      loadComponent: () =>
        import('./jobs/candidate-details/candidate-details.component').then((m) => m.CandidateDetailsComponent),
        title: 'Xintra - Candidate Details'
    },
    {
      path: 'jobs/job-details',
      loadComponent: () =>
        import('./jobs/job-details/job-details.component').then(
          (m) => m.JobDetailsComponent
        ),
        title: 'Xintra - Job Details'
    },
    {
      path: 'jobs/job-post',
      loadComponent: () =>
        import('./jobs/job-post/job-post.component').then(
          (m) => m.JobPostComponent
        ),
        title: 'Xintra - Job Post'
    },
    {
        path: 'jobs/jobs-list',
        loadComponent: () =>
          import('./jobs/job-list/job-list.component').then(
            (m) => m.JobListComponent
          ),
           title: 'Xintra - Jobs List'
      },
      {
        path: 'jobs/search-candidate',
        loadComponent: () =>
          import('./jobs/search-candidate/search-candidate.component').then(
            (m) => m.SearchCandidateComponent
          ),
          title: 'Xintra - Search Candidate'
      },
      {
        path: 'jobs/search-jobs',
        loadComponent: () =>
          import('./jobs/search-jobs/search-jobs.component').then(
            (m) => m.SearchJobsComponent
          ),
          title: 'Xintra - Search Jobs'
      },
      {
        path: 'jobs/search-company',
        loadComponent: () =>
          import('./jobs/search-company/search-company.component').then(
            (m) => m.SearchCompanyComponent
          ),
          title: 'Xintra - Search Company'
      },
      {
        path: 'nft/create-nft',
        loadComponent: () =>
          import('./nft/create-nft/create-nft.component').then((m) => m.CreateNftComponent),
          title: 'Xintra - Create Nft'
      },
      {
        path: 'nft/live-auction',
        loadComponent: () =>
          import('./nft/live-auction/live-auction.component').then(
            (m) => m.LiveAuctionComponent
          ),
          title: 'Xintra - Live Auction'
      },
      {
        path: 'nft/market-place',
        loadComponent: () =>
          import('./nft/market-place/market-place.component').then(
            (m) => m.MarketPlaceComponent
          ),
          title: 'Xintra - Market Place'
      },
      {
          path: 'nft/nft-details',
          loadComponent: () =>
            import('./nft/nft-details/nft-details.component').then(
              (m) => m.NftDetailsComponent
            ),
            title: 'Xintra - Nft Details'
        },
        {
          path: 'nft/wallet-integration',
          loadComponent: () =>
            import('./nft/wallet-integration/wallet-integration.component').then(
              (m) => m.WalletIntegrationComponent
            ),
            title: 'Xintra - Wallet Integration'
        },
        {
          path: 'projects/create-project',
          loadComponent: () =>
            import('./projects/create-project/create-project.component').then((m) => m.CreateProjectComponent),
            title: 'Xintra - Create Project'
        },
        {
          path: 'projects/project-overview',
          loadComponent: () =>
            import('./projects/project-overview/project-overview.component').then(
              (m) => m.ProjectOverviewComponent
            ),
            title: 'Xintra - Project Overview'
        },
        {
          path: 'projects/projects-list',
          loadComponent: () =>
            import('./projects/project-list/project-list.component').then(
              (m) => m.ProjectListComponent
            ),
            title: 'Xintra - Projects List'
        },
        {
          path: 'tasks/kanban-board',
          loadComponent: () =>
            import('./tasks/kanban-board/kanban-board.component').then((m) => m.KanbanBoardComponent),
            title: 'Xintra - Kanban Board'
        },
        {
          path: 'tasks/task-list-view',
          loadComponent: () =>
            import('./tasks/list-view/list-view.component').then(
              (m) => m.ListViewComponent
            ),
            title: 'Xintra - Task List View'
        },
        {
          path: 'tasks/task-details',
          loadComponent: () =>
            import('./tasks/task-details/task-details.component').then(
              (m) => m.TaskDetailsComponent
            ),
            title: 'Xintra - Project List'
        }
        
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}