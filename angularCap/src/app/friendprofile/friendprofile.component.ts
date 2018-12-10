import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccountService } from '../Services/useraccount.service';
import { UserAccount } from '../UserInterface/user-account';

@Component({
  selector: 'app-friendprofile',
  templateUrl: './friendprofile.component.html',
  styleUrls: ['./friendprofile.component.css']
})
export class FriendprofileComponent implements OnInit {
  receiverEmailID: string;
  message:string;
  userAccountDetailsOfReceiver:UserAccount;
  senderEmailID:string;
  friendRequestMessage: string;
  

  constructor(public router: Router,public userAccountService:UseraccountService) { }

  ngOnInit() {
    this.receiverEmailID = localStorage.getItem('token1');
    this.userAccountService.getUserAccountDetails(this.receiverEmailID).subscribe (
      userAccountDetails=>{
      this.userAccountDetailsOfReceiver=userAccountDetails;
      console.log(this.userAccountDetailsOfReceiver.emailID);
    },
    errorMessage=>{
      this.message="Email ID does not exist.";
    }
  );
  }
  back() : void{
    console.log("back");
    this.router.navigate(['/homepageComponent']);
  }
  addFriend(): void{
    this.senderEmailID = localStorage.getItem('token');
    this.userAccountService.sendFriendRequest(this.senderEmailID,this.receiverEmailID).subscribe(
      friendRequestMessage=>{
        this.friendRequestMessage=friendRequestMessage;
        console.log(this.friendRequestMessage);
      },
      errorMessage=>{
        this.message="Email ID does not exist.";
      }
    );
    }
  
  }

