import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionGuard } from '../../core/services/guards/permission.guard';
import { authGuard } from '../../core/services/guards/auth.guard';

export const admin: Routes = [
{
    path:'systemadmin',
    canActivate: [authGuard],   // 👈 AQUÍ
    children:[ 
    {
        path: 'organization',
        loadComponent: () =>
        import('./organization/organization.component').then((m) => m.OrganizationComponent),
        canActivate: [permissionGuard],
        data: { permission: 'SALE' }
    },
    {
        path: 'users',
        loadComponent: () =>
        import('./users/users.component').then(
            (m) => m.UsersComponent
        ),
        canActivate: [permissionGuard],
        data: { permission: 'SALE' }
    }
    // ,
    // {
        // path: 'analytics',
        // loadComponent: () =>
        // import('./analytics/analytics.component').then(
        //     (m) => m.AnalyticsComponent
        // ),
        // canActivate: [permissionGuard],
        // data: { permission: 'ANAL' }
    // }
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class systemadminRoutingModule {
  static routes = admin;
}