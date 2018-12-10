import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(): void {
    console.log("back");
    this.router.navigate(['/timelineComponent']);
  }
  delete(): void {
    console.log("delete");
    this.router.navigate(['/welcomeComponent']);
  }

}
