import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const admin: Routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'coming-soon',
        loadComponent: () =>
          import('./coming-soon/coming-soon.component').then(
            (m) => m.ComingSoonComponent
          ),
      },
      {
        path: 'create-password/basic',
        loadComponent: () =>
          import('./create-password/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'create-password/cover',
        loadComponent: () =>
          import('./create-password/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },

      {
        path: 'lock-screen/basic',
        loadComponent: () =>
          import('./lock-screen/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'lock-screen/cover',
        loadComponent: () =>
          import('./lock-screen/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },
      {
        path: 'reset-password/basic',
        loadComponent: () =>
          import('./reset-password/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'reset-password/cover',
        loadComponent: () =>
          import('./reset-password/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },
      {
        path: 'sign-up/basic',
        loadComponent: () =>
          import('./sign-up/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'sign-up/cover',
        loadComponent: () =>
          import('./sign-up/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },
      {
        path: 'sign-in/basic',
        loadComponent: () =>
          import('./sign-in/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'sign-in/cover',
        loadComponent: () =>
          import('./sign-in/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },
      {
        path: 'two-step-verification/basic',
        loadComponent: () =>
          import('./two-step-verification/basic/basic.component').then(
            (m) => m.BasicComponent
          ),
      },
      {
        path: 'two-step-verification/cover',
        loadComponent: () =>
          import('./two-step-verification/cover/cover.component').then(
            (m) => m.CoverComponent
          ),
      },
      {
        path: 'under-maintanace',
        loadComponent: () =>
          import('./under-maintanace/under-maintanace.component').then(
            (m) => m.UnderMaintanaceComponent
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}
