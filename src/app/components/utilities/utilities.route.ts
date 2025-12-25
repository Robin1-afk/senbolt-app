import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
{path:'utilities',children:[
  {
    path: 'avatars',
    loadComponent: () =>
      import('./avatars/avatars.component').then((m) => m.AvatarsComponent),
  },
  {
    path: 'borders',
    loadComponent: () =>
      import('./borders/borders.component').then((m) => m.BordersComponent),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((m) => m.ColorsComponent),
  },
  {
    path: 'css-grid',
    loadComponent: () =>
      import('./css-grid/css-grid.component').then((m) => m.CssGridComponent),
  },
  {
    path: 'columns',
    loadComponent: () =>
      import('./columns/columns.component').then((m) => m.ColumnsComponent),
  },
  {
    path: 'flex',
    loadComponent: () =>
      import('./flex/flex.component').then((m) => m.FlexComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class utilitiesRoutingModule {
  static routes = admin;
}