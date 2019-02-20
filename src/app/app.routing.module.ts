import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'companyowner',
    loadChildren: `./company-owner/company-owner.module#CompanyOwnerModule`
  }
  // {
  //   path: 'orders',
  //   loadChildren: './orders/orders.module#OrdersModule'

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }



