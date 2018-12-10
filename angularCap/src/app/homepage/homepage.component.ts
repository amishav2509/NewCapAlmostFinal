import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';
import { UseraccountService } from '../Services/useraccount.service';
import { UserAccount } from '../UserInterface/user-account';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public homepageComponent:string;
  userAccountDetails:UserAccount;
  emailID: string;
  message:string;
  _personEmailID: string;
  get personEmailID():string{
    return this._personEmailID;
  } 
  set personEmailID(value: string){
    this._personEmailID = value;
  } 
  constructor(private router: Router,public authService: AuthService,public userAccountService:UseraccountService) { }

  ngOnInit() {
    this.emailID = localStorage.getItem('token');
    this.userAccountService.getUserAccountDetails(this.emailID).subscribe (
      userAccountDetails=>{
      this.userAccountDetails=userAccountDetails;
      console.log(this.userAccountDetails.emailID);
    },
    errorMessage=>{
      this.message="Email ID does not exist.";
    }
  );







}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/welcomeComponent']);
  }
  timeline(): void {
    console.log("timeline");
    this.router.navigate(['/timelineComponent']);
  }
  search(): void{
    this.userAccountService.getUserAccountDetails(this.personEmailID).subscribe(
      userAccountDetails=>{
        this.userAccountDetails=userAccountDetails;
        if(this._personEmailID == this.userAccountDetails.emailID){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token1',this.userAccountDetails.emailID );
          this.router.navigate(['/friendprofileComponent']);
        }
        else{
          this.message = "Please check your email";
        }
      },
      errorMessage=>{
        this.message="Email ID does not exist.";
      }
    )
  }

  chats(): void {
    console.log("chats");
    this.router.navigate(['/chatsComponent']);
  }
  
  friendRequest():void{
    this.router.navigate(['/friendrequestComponent']);
  }

}
