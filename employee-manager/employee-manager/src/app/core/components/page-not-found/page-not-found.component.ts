import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  public title: string = "404 Page Not Found";
  constructor(private router:Router) { }

  // when wrong adress is entered the button in the center navigates to home page
  goHome() {
    this.router.navigate([`/home`])
  }
}
