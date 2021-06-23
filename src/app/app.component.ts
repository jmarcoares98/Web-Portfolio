import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private router: Router){}

  aboutme(){
    this.router.navigate(['aboutme']);
  }

  projects(){
    this.router.navigate(['projects']);
  }

  contact(){
    this.router.navigate(['contact']);
  }
}
