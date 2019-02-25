import * as core from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CompanyOwnerRoutingModule } from './company-owner-routing.module';
import { RegisterComponent } from './register/register.component';
import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '../shared-component/login/login.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { CompanyOwnerService } from './service/company-owner.service';
import { CompanyHomeComponent } from './company-home/company-home.component';



// @ts-ignore
// @ts-ignore
// @ts-ignore
@core.NgModule({
  imports: [
    NgbModule, NgbPaginationModule, NgbAlertModule,
    CommonModule,
    CompanyOwnerRoutingModule,ReactiveFormsModule,HttpClientModule,SharedComponentModule
  ],
  declarations: [
    RegisterComponent,
    CompanyOwnerDashboardComponent,
    CompanyHomeComponent
  ],
  providers: [CompanyOwnerService]
})
export class CompanyOwnerModule { }
