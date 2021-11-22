import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {
  public stocks: Stock[];
  public favorites: boolean[];

  constructor() {
    this.stocks = [];
    this.favorites = [];

    this.stocks.push(new Stock('Telefonica', 'TEL', 12, 16));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 18, 16));
    this.stocks.push(new Stock('Naturgy', 'NAT', 12, 16));
    this.stocks.push(new Stock('Telefonica', 'TEL', 12, 16));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 18, 16));

    this.stocks.forEach(() => this.favorites.push(false));
  }

  ngOnInit(): void {}

  setFavorite(i: number): void {
    this.favorites[i] = true
  }
}

// setFavorite():void {
//   this.stock.favorite = true
// }

// getClases():Array<string> {
//   const classes = ["stock-price"]
//   if (this.stock.isSubiendo()){
//     classes.push("subiendo")
//   } else {
//     classes.push("bajando")
//   }
//   if (this.stock.isCambioFuerte()) {
//     classes.push("cambio-fuerte")
//   }
//   console.log("classes", classes)
//   return classes
// }
