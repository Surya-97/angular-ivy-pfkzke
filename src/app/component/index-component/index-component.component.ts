import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servies/data.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {
  productData: any[] = [];
  bannerData: any[] = [];
  cardLength: number;
  cardDetails: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllBanner().subscribe((response: any) => {
      this.bannerData = response.data;
      console.log(this.bannerData);
    });

    this.dataService.getAll().subscribe((result: any) => {
      this.productData = result.data;
      console.log(this.productData);
    });
  }

  onCart() {
    let headerbj = new HeaderComponent();
    let value = localStorage.getItem('cardLength');
    this.cardDetails = JSON.parse(value);
    localStorage.setItem('cardLength', JSON.stringify(this.cardDetails + 1));
    console.log(this.cardDetails);
    headerbj.getCartLength();
  }
}
