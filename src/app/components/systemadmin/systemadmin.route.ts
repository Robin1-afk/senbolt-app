import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { permissionGuard } from '../../core/services/guards/permission.guard';
import { authGuard } from '../../core/services/guards/auth.guard';

export const admin: Routes = [
{
    path:'systemadmin',
    canActivate: [authGuard],
    children:[ 
    {
        path: 'organization',
        loadComponent: () =>
        import('./organization/organization.component').then((m) => m.OrganizationComponent),
        canActivate: [permissionGuard],
        data: { permission: 'ORGANIZATION' }
    },
    {
        path: 'users',
        loadComponent: () =>
        import('./users/users.component').then(
            (m) => m.UsersComponent
        ),
        canActivate: [permissionGuard],
        data: { permission: 'USER' }
    },
    {
        path: 'plans',
        loadComponent: () =>
        import('./plans/plans.component').then(
            (m) => m.PlansComponent
        ),
        canActivate: [permissionGuard],
        data: { permission: 'PLANS' }
    },
    {
        path: 'subscription',
        loadComponent: () =>
        import('./subscription/subscription.component').then(
            (m) => m.SubscriptionComponent
        ),
        canActivate: [permissionGuard],
        data: { permission: 'SUBSCRIPTION' }
    },
    {
        path: 'roles',
        loadComponent: () =>
        import('./roles/roles.component').then(
            (m) => m.RolesComponent
        ),
        canActivate: [permissionGuard],
        data: { permission: 'ROLES' }
    }
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