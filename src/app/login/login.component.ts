import { Component } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest:Login={
   UserId:'',
    Username:'',
    Password:'',
    Role:'',
   
  };


  constructor(private loginservice:LoginService,private router:Router){}

  ngOnInit():void{
  }
  loginUsers(){
    console.log(this.loginRequest)
      this.loginservice.loginUser(this.loginRequest)    
    .subscribe({
      next:(user)=>{
        if(user){
          if(this.loginRequest.Role=="user"||this.loginRequest.Role=="User"){
          this.router.navigate(['userview']);
          }
          else if(this.loginRequest.Role=="Admin"||this.loginRequest.Role=="admin"){
            this.router.navigate(['admin']);
          }
          else{
            window.alert("Please Enter valid details");
          }
        }
      },
      error: error => {
        window.alert("Invalid Credentials");
        console.log(error);
      }
    });
  }

}
