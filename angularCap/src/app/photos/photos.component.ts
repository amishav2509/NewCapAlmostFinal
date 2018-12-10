import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(): void {
    console.log("back");
    this.router.navigate(['/timelineComponent']);
  }

}
