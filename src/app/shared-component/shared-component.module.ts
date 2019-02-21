import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentRoutingModule,ReactiveFormsModule
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent]
})
export class SharedComponentModule { }
