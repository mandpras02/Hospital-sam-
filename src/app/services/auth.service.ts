import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users.model';
import { EditUser } from '../models/updateuser.model';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:53519/'

  registerUser(registerRequest:Register):Observable<Register>{
    return this.http.post<Register>(this.baseUrl+'/RegisterUser',registerRequest);
  }
 
  // Proceedregister(inputdata:any) {
  //   return this.http.post(this.baseUrl+'/RegisterUser',inputdata);
  // }
}
