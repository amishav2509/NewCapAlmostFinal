import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  id: string;
  loading: boolean=true;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    console.log("ID="+this.id);
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/welcomeComponent']);
  }
  home(): void {
    console.log("home");
    this.router.navigate(['/homepageComponent']);
  }
  settings(): void {
    console.log("settings");
    this.loading=false;
  }
  about(): void {
    console.log("about");
    this.router.navigate(['/personaldetailsComponent']);
  }
  changePassword(): void {
    console.log("changePassword");
    this.router.navigate(['/changepasswordComponent']);
  }
  delete(): void {
    console.log("delete");
    this.router.navigate(['/deleteaccountComponent']);
  }
  photos(): void {
    console.log("photos");
    this.router.navigate(['/photosComponent']);
  }

}
