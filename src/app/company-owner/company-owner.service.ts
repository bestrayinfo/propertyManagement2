import { Injectable } from '@angular/core';

import { Registration } from './model/registration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyOwnerService {

  private url = 'http://localhost:8084/company/addCompanyOwner';

  constructor(private http: HttpClient) { }


  // env=environment;
   public addCompanyOwner(company:  Registration) {

       return this.http.post<Registration>(this.url, company);
   }
}
