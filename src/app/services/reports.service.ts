import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reports } from '../models/reports.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  baseUrl='http://localhost:53519/';

  constructor(private http: HttpClient) { }

  getReports() {
    return this.http.get(this.baseUrl+'GetOrderDetails');
  }

  getName(id:any)
  {
    return this.http.get(this.baseUrl+'HospitalDetails/'+id);
  }

}
