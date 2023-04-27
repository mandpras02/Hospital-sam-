import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ToastrService} from 'ngx-toastr'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Register } from '../models/register.model';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest:Register={
   
    Name:'',
    Username:'',
    Password:'',
    EmailId:'',
    PhoneNumber:'',
    HospitalId:'',
    DepartmentId:'',
    Role:'',
    
    Status:'',
};

userdata: any=[];

constructor(private userservice:UsersService,private router:Router,
  private builder:FormBuilder,){

}

ngOnInit():void{
}

registerUser() {

  console.log(this.registerRequest);
  
 this.userservice.registerUser(this.registerRequest)
  
 .subscribe(data =>
  
  {
  
 console.log(data);
  
this.userdata=data;
  
   window.alert("Registration Successful");
  
 this.router.navigate(['/login']);
  
 });
  
 }
  
 

// registerUser() {
//   console.log(this.registerRequest);
//   this.service.registerUser(this.registerRequest)
//   .subscribe(data => 
//     {
//       console.log(data);
//       this.userdata=data;
//     window.alert("Registered successfully");
//     this.router.navigate(['/login']);
//     });
// }

// registerform=this.builder.group({
//   UserId:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
//   Name:this.builder.control('',Validators.required),
//   EmailId:this.builder.control('',Validators.email),
//   PhoneNumber:this.builder.control('',Validators.required),
//   HospitalId:this.builder.control('',Validators.required),
//   DepartmentId:this.builder.control('',Validators.required),
//   Username:this.builder.control('',Validators.required),
//   Password:this.builder.control('',Validators.required),
//   Role:this.builder.control('',Validators.required),
// });
// proceedRegistration(){
//   if(this.registerform.valid){
//     this.service.Proceedregister(this.registerform.value).subscribe(res=>{
//       this.toastr.success('Please contact admin for enable access','Registered successfully');
//       this.router.navigate(['login']);
//     })
//   }
//   else{
//     this.toastr.warning('Please enter valid data')
//   }
// }

}
