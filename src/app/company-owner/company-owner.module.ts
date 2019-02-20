import * as core from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CompanyOwnerRoutingModule } from './company-owner-routing.module';
import { RegisterComponent } from './register/register.component';
import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyOwnerService } from './company-owner.service';



// @ts-ignore
// @ts-ignore
// @ts-ignore
@core.NgModule({
  imports: [
    NgbModule, NgbPaginationModule, NgbAlertModule,
    CommonModule,
    CompanyOwnerRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [
    RegisterComponent,
    CompanyOwnerDashboardComponent
  ],
  providers: [CompanyOwnerService]
})
export class CompanyOwnerModule { }
