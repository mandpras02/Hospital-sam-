import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { EditUser } from '../models/updateuser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdata: any=[];
    
  constructor(private route: ActivatedRoute, private userservice:UsersService,private router:Router) { }
     
  ngOnInit(): void {
 this.route.paramMap.subscribe(
 params => {
  const id = params.get('id');
 if(id){
  this.userservice.viewUser(id)
 .subscribe(
  response => {
 this.userdata = response;
 console.log(response);
  }
  );
 }
 }
  );
  }
     
 onSave(): void {
 const updaterequest: EditUser = {
 Name: this.userdata.Name,
 EmailId: this.userdata.EmailId,
 Username: this.userdata.Username,
 CreatedOn: this.userdata.CreatedOn,
 ApprovedBy: this.userdata.ApprovedBy,
 ApprovedOn: this.userdata.ApprovedOn,
 PhoneNumber: this.userdata.PhoneNumber,
 Password: this.userdata.Password,
 Status: this.userdata.Status,
 HospitalId: this.userdata.HospitalId,
 DepartmentId: this.userdata.DepartmentId,
 // UserId: this.userdata.UserId,
 Role:this.userdata.Role
 }
     
  this.userservice.editUser(this.userdata.id, this.userdata)
 .subscribe(
   response => {
  alert("Profile Edited");
   this.router.navigate(['/home']);
   }
 );
 }
}
