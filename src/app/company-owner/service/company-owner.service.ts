import { Injectable } from '@angular/core';

;
import { HttpClient } from '@angular/common/http';
import { Registration } from '../model/registration';

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
