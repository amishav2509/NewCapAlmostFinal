import { Component, OnInit } from '@angular/core';
import { UseraccountService } from '../Services/useraccount.service';
import { FriendList } from '../AllInterface/friend-list';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(public userAccountService:UseraccountService) { }
  friendListOfCurrentUser:FriendList[];
  ngOnInit() {
    this.userAccountService.getFriendList(localStorage.getItem('token')).subscribe(
      x=>{
        this.friendListOfCurrentUser=x;
        console.log("List"+x);
      },
      y=>{
        console.log("Error");
      }
    )
  }
}
