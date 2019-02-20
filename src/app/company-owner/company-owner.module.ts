import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyOwnerRoutingModule } from './company-owner-routing.module';
import {RegisterComponent} from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyOwnerRoutingModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class CompanyOwnerModule { }
