import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { UseraccountService } from '../Services/useraccount.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() friendEmailID:string;
  userEmailID:string;
  constructor(public userAccountService:UseraccountService) {
    
   }
  onAcceptFriendRequest(): void{
    
    console.log(this.friendEmailID);
    this.userEmailID=localStorage.getItem('token');
    this.userAccountService.acceptFriendRequest(this.friendEmailID,this.userEmailID).subscribe(
      x=>console.log("1"),
      y=>console.log("2")
    );
  }
  ngOnInit(){
  }
}
