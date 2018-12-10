import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';
import { UseraccountService } from '../Services/useraccount.service';
import { UserAccount } from '../UserInterface/user-account';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string;
  returnUrl: string;
  _emailID:string;
  _password:string;
  userAccountDetails:UserAccount;
  get emailID():string{
    return this._emailID;
  } 
  set emailID(value: string){
    this._emailID = value;
  } 
  get password():string{
    return this._password;
  } 
  set password(value: string){
    this._password = value;
  } 
  constructor(private route:ActivatedRoute,public router: Router, public authService: AuthService,public userAccount:UseraccountService) { }
  ngOnInit() {
    this.returnUrl = '/homepageComponent';
    this.authService.logout();
  }
  login() {
      this.userAccount.getUserAccountDetails(this.emailID).subscribe(
        userAccountDetails=>{
          this.userAccountDetails=userAccountDetails;
          console.log(userAccountDetails.emailID);
          console.log(this.userAccountDetails.emailID);
          if(this._emailID == this.userAccountDetails.emailID && this._password == this.userAccountDetails.password){
            this.authService.logout();
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token',this.userAccountDetails.emailID );
            this.router.navigate([this.returnUrl]);
          }
          else{
            this.message = "Please check your email and password";
          }
        },
        errorMessage=>{
          this.message="Email ID does not exist.";
        }
      );
    }   

}
