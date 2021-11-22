import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Stock } from 'src/app/models/stock';


@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {

  @Input()
  public stock: Stock | undefined;

  @Input("favorite")
  public isFavorite: boolean | undefined

  @Output("setFavorite")
  public emitFavorite: EventEmitter<string> = new EventEmitter<string>()

  constructor() {

  }

  ngOnInit(): void {}

  setFavorite(code: string): void {
    this.emitFavorite.emit(code)
  }
}
