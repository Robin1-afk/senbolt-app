import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uielementsRoutingModule } from '../../components/uielements/uielements.routes';
import { appsRoutingModule } from '../../components/apps/apps.routes';
import { widgetsRoutingModule } from '../../components/widgets/widgets.routes';
import { dashboardRoutingModule } from '../../components/dashboards/dashboards.routes';
import { pagesRoutingModule } from '../../components/pages/pages.route';
import { mapRoutingModule } from '../../components/map/map.route';
import { iconsRoutingModule } from '../../components/icons/icons.route';
import { chartsRoutingModule } from '../../components/charts/charts.route';
import { tablesRoutingModule } from '../../components/tables/tables.route';
import { formsRoutingModule } from '../../components/forms/forms.route';
import { advanceduiRoutingModule } from '../../components/advancedui/advancedui.routes';
import { utilitiesRoutingModule } from '../../components/utilities/utilities.route';
import { systemadminRoutingModule } from '../../components/systemadmin/systemadmin.route';



export const content: Routes = [

  { path: '', children: [
   ...systemadminRoutingModule.routes,
   ...dashboardRoutingModule.routes,
   ...advanceduiRoutingModule.routes,
   ...pagesRoutingModule.routes,
   ...chartsRoutingModule.routes,
   ...uielementsRoutingModule.routes,
   ...utilitiesRoutingModule.routes,
   ...appsRoutingModule.routes,
   ...formsRoutingModule.routes,
   ...mapRoutingModule.routes,
   ...iconsRoutingModule.routes,
   ...widgetsRoutingModule.routes,
   ...tablesRoutingModule.routes
  ]}
];
@NgModule({
    // imports: [RouterModule.forRoot()],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
