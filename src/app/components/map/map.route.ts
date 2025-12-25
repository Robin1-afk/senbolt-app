import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'maps',children:[
    {
      path: 'google-map',
      loadComponent: () =>
        import('./google-map/google-map.component').then(
          (m) => m.GoogleMapComponent
        ),
    },
    {
      path: 'leaflet-maps',
      loadComponent: () =>
        import('./leaflet-maps/leaflet-maps.component').then(
          (m) => m.LeafletMapsComponent
        ),
    },
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mapRoutingModule {
  static routes = admin;
}