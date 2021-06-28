import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cardLength: any;
  constructor() {}

  ngOnInit() {
    this.getCartLength();
  }

  getCartLength() {
    this.cardLength = localStorage.getItem('cardLength');
  }
}
