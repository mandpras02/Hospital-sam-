import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUser } from 'src/app/models/updateuser.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

  export class EdituserComponent implements OnInit {

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
 alert("User Edited");
  this.router.navigate(['/users']);
  }
);
}
    
    
deletePost(): void {
console.log(this.userdata.UserId);
this.userservice.deleteUser(this.userdata.userId)
.subscribe(
response => {
if(response)
 { 
 window.alert("User Deleted Successfully");
  this.router.navigate(['/users']);
 }
else
{ 
 window.alert("Deletion Failed");
 }
}
 );
}
    
    
    
    
    }


