import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'ui-elements',
    children: [
      {
        path: 'alerts',
        loadComponent: () =>  
          import('./alerts/alerts.component').then((m) => m.AlertsComponent),
        title: 'Xintra - Alerts',
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./breadcrumb/breadcrumb.component').then(
            (m) => m.BreadcrumbComponent
          ),
        title: 'Xintra - Breadcrumb',
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
        title: 'Xintra - Buttons',
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./badge/badge.component').then((m) => m.BadgeComponent),
        title: 'Xintra - Badge',
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('./buttongroup/buttongroup.component').then(
            (m) => m.ButtongroupComponent
          ),
        title: 'Xintra - Button Group',
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('./cards/cards.component').then((m) => m.CardsComponent),
        title: 'Xintra - Cards',
      },
      {
        path: 'dropdowns',
        loadComponent: () =>
          import('./dropdowns/dropdowns.component').then(
            (m) => m.DropdownsComponent
          ),
        title: 'Xintra - Dropdowns',
      },
      {
        path: 'images&figures',
        loadComponent: () =>
          import('./images-figures/images-figures.component').then(
            (m) => m.ImagesFiguresComponent
          ),
        title: 'Xintra - Images-Figures',
      },
      {
        path: 'list-group',
        loadComponent: () =>
          import('./listgroup/listgroup.component').then(
            (m) => m.ListgroupComponent
          ),
        title: 'Xintra - List group',
      },
      {
        path: 'nav-tabs',
        loadComponent: () =>
          import('./navtabs/navtabs.component').then((m) => m.NavtabsComponent),
        title: 'Xintra - Navtabs',
      },
      {
        path: 'objectfit',
        loadComponent: () =>
          import('./objectfit/objectfit.component').then(
            (m) => m.ObjectfitComponent
          ),
        title: 'Xintra - Objectfit',
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./pagination/pagination.component').then(
            (m) => m.PaginationComponent
          ),
        title: 'Xintra - Pagination',
      },
      {
        path: 'popovers',
        loadComponent: () =>
          import('./popovers/popovers.component').then(
            (m) => m.PopoversComponent
          ),
        title: 'Xintra - Popovers',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'Xintra - toasts',
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
        title: 'Xintra - Progress',
      },
      {
        path: 'spinners',
        loadComponent: () =>
          import('./spinners/spinners.component').then(
            (m) => m.SpinnersComponent
          ),
        title: 'Xintra - Spinners',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'Xintra - Toasts',
      },
      {
        path: 'tooltips',
        loadComponent: () =>
          import('./tooltips/tooltips.component').then(
            (m) => m.TooltipsComponent
          ),
        title: 'Xintra - Tooltips',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}
