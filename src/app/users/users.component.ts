import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MonoTypeOperatorFunction, OperatorFunction, Subject, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  userlist: any=[];
 
  constructor(private userservice: UsersService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userservice.getUsers().subscribe(data=>      
      {
          console.log(data);
          this.userlist=data;
      })
  }


}
