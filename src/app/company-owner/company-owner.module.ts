import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CompanyOwnerRoutingModule } from './company-owner-routing.module';
import { RegisterComponent } from './register/register.component';
import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';



// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    NgbModule, NgbPaginationModule, NgbAlertModule,
    CommonModule,
    CompanyOwnerRoutingModule
  ],
  declarations: [
    RegisterComponent,
    CompanyOwnerDashboardComponent
  ]
})
export class CompanyOwnerModule { }
