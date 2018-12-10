import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../UserInterface/user-account';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';
import { UseraccountService } from '../Services/useraccount.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  
  firstName:string;
  lastName:string;
  emailID:string;
  dob: string;
  gender:string;
  password:string;
  confirmPassword:string;
  message:string;
  check:number;
  constructor(public router: Router, public authService: AuthService,public userAccount:UseraccountService) {
  }
  ngOnInit() {
  }
  register(){
    if(this.password!=this.confirmPassword){
      this.message="Password Mismatch. Please try again";
    }
  else{
      this.userAccount.acceptUserDetails(this.firstName,this.lastName,this.emailID,this.dob,this.gender,this.password).subscribe(
        message=>{
          this.message=message;
        }
        ,
          errorMessage=>{
          this.message=errorMessage;
          this.authService.logout();
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.emailID);
          this.router.navigate(['/timelineComponent']);
          }
      );
    }
  }

}
