import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';
import { LoginComponent } from '../shared-component/login/login.component';


const routes: Routes = [{
  path: '', component: CompanyOwnerDashboardComponent
},
{path: 'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyOwnerRoutingModule { }
