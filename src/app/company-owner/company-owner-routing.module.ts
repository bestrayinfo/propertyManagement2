import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';


const routes: Routes = [{
  path: '', component: CompanyOwnerDashboardComponent
},
{path: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyOwnerRoutingModule { }
