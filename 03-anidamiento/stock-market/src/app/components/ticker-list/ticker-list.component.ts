import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker-list',
  templateUrl: './ticker-list.component.html',
  styleUrls: ['./ticker-list.component.css'],
})
export class TickerListComponent implements OnInit {
  public stocks: Array<Stock>;
  public favorites: Array<boolean>;

  constructor() {
    this.stocks = [];
    this.favorites = [];
  }

  ngOnInit(): void {
    this.stocks.push(new Stock('Telefonica', 'TEL', 12, 16));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 18, 16));
    this.stocks.push(new Stock('Naturgy', 'NAT', 12, 16));
    this.stocks.push(new Stock('Telefonica', 'TEL', 12, 16));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 18, 16));
    this.stocks.forEach(() => {
      this.favorites.push(false);
    });
  }

  setFavorite(code: string) {
    // console.log('he de poner favorito a ', code);
    this.stocks.forEach((stock, index) => {
      if (stock.code === code) this.favorites[index] = true;
    });
  }
}
