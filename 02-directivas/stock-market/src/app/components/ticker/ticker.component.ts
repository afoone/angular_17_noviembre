import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  public stock: Stock

  constructor() {
    this.stock = new Stock("Telefonica", "TEL", 78, 16)
   }

  ngOnInit(): void {
  }

  setFavorite() {
    this.stock.favorite = true
  }

}
