import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales.component').then((m) => m.SalesComponent),
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(
      (m) => m.AnalyticsComponent
    ),
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
},
{
  path: 'crm',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
},
{
  path: 'medical',
  loadComponent: () =>
    import('./medical/medical.component').then((m) => m.MedicalComponent),
},
{
  path: 'pos-system',
  loadComponent: () =>
    import('./pos-system/pos-system.component').then((m) => m.PosSystemComponent),
},
{
  path: 'podcast',
  loadComponent: () =>
    import('./podcast/podcast.component').then((m) => m.PodcastComponent),
},
{
  path: 'school',
  loadComponent: () =>
    import('./school/school.component').then((m) => m.SchoolComponent),
},
{
  path: 'social-media',
  loadComponent: () =>
    import('./social-media/social-media.component').then((m) => m.SocialMediaComponent),
}
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}