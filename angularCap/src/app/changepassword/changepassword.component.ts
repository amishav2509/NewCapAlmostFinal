import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../UserInterface/user-account';
import { UseraccountService } from '../Services/useraccount.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  _password:string;
  emailID:string;
  userAccountDetails:UserAccount;
  _newPassword:string;
  _confirmNewPassword:string;
  changePasswordErrorMessage:string;
  successMessage:string;
  get password():string{
    return this._password;
  } 
  set password(value: string){
    this._password = value;
  }
  get newPassword():string{
    return this._newPassword;
  } 
  set newPassword(value: string){
    this._newPassword = value;
  }
  get confirmNewPassword():string{
    return this._confirmNewPassword;
  } 
  set confirmNewPassword(value: string){
    this._confirmNewPassword = value;
  }
  constructor(private router: Router,public userAccountService:UseraccountService) { }

  ngOnInit() { 
    this.emailID = localStorage.getItem('token');
    console.log(this.emailID);
    this.userAccountService.getUserAccountDetails(this.emailID).subscribe(
      userAccountDetails=>{
        this.userAccountDetails=userAccountDetails;
        this.emailID=userAccountDetails.emailID;
      }
      ,
      e=>{
        console.log("Hello");
      }
    );
  }
  back(): void {
    console.log("back");
    this.router.navigate(['/timelineComponent']);
  }
  changePassword(): void {
    console.log("A");
        if(this._password==this.userAccountDetails.password && this._newPassword == this._confirmNewPassword){
          this.userAccountService.changePassword(this.emailID,this._newPassword).subscribe(
            x=>{
              this.successMessage=x;
            }
            ,
            y=>{
              this.successMessage="Your Password has been changed."
            }
          );
        }       
        else
          this.changePasswordErrorMessage = "Please check your password";
      }
}
