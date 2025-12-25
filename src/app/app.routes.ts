import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { content } from './shared/routes/content.routes';
import { LandingLayoutComponent } from './shared/layouts/landing-layout/landing-layout.component';
import { landing } from './shared/routes/landing.routes';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.routes';
export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
        path: 'auth/login',
        loadComponent: () =>
          import('../app/authentication/login/login.component').then((m) => m.LoginComponent),
      },
    { path: '', component: ContentLayoutComponent, children: content },
    { path: '', component: LandingLayoutComponent, children: landing },
    { path: '', component: AuthenticationLayoutComponent, children: authen },
    { path: '**', redirectTo: '/error/error404', pathMatch: 'full' },
];
