import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[LoginComponent],
  // providers:[AuthService,TokenStorageService],
  declarations: [LoginComponent]
})
export class SharedComponentModule { }
