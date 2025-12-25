import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { landingRoutingModule } from '../../components/pages/landing.route';

export const landing: Routes = [

  { path: '', children: [
   ...landingRoutingModule.routes
   
  ]}

  
];
@NgModule({
    // imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class landingpageRoutingModule { }
