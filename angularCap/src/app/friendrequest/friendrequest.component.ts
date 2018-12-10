import { Component, OnInit, Input, Output } from '@angular/core';
import { UseraccountService } from '../Services/useraccount.service';
import { FriendRequestInterface } from '../AllInterface/friend-request-interface';

@Component({
  selector: 'app-friendrequest',
  templateUrl: './friendrequest.component.html',
  styleUrls: ['./friendrequest.component.css']
})
export class FriendrequestComponent implements OnInit {

  fEmailID:string;


  constructor(public userAccountService:UseraccountService) { }
  emailID:string;
  receiveFriendRequest:FriendRequestInterface[];
  ngOnInit() {
    this.emailID=localStorage.getItem("token");
    this.userAccountService.getFriendRequest(this.emailID).subscribe(
      x=>{
        console.log(x);
        this.receiveFriendRequest=x;
      },
      y=>{
        console.log(y);
      }
    );
  }
}
