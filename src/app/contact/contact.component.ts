import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mailText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.mailText = "mailto:juan_marco98@yahoo.com?subject=&body=";
    window.location.href = this.mailText;
  }
}
