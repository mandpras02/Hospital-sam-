import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { EditUser } from '../models/updateuser.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  baseUrl='http://localhost:53519/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl+'GetUser');
  }
  

  viewUser(id: string){
    return this.http.get(this.baseUrl+'GetUserById?id='+id);
  }

  editUser(id: string, updaterequest: EditUser): Observable<EditUser> {
    return this.http.put<EditUser>(this.baseUrl+'UpdateUser', updaterequest);
  }
  registerUser(registerRequest:Register):Observable<Register>{
    return this.http.post<Register>(this.baseUrl+'RegisterUser',registerRequest);
  }
  deleteUser(id: string){
    return this.http.delete(this.baseUrl+'DeleteUser?id='+id);
  }
}
