import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string="http://localhost:53519";

  constructor( private http:HttpClient) {}

  loginUser(loginRequest:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl+'/ValidateUser',loginRequest);
  }
}
