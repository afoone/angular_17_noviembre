import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit, DoCheck, OnChanges, OnDestroy {

  @Input()
  public parametro: number = 1;

  constructor() {
    console.log('En el constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('entrando en on changes', changes);
  }


  ngOnDestroy(): void {
    console.log('entrando en on destroy');
  }


  ngDoCheck(): void {
    console.log('entrando en do check');
  }

  ngOnInit(): void {
    console.log('entrando en on init');
    // búsquedas asíncrona
    // setTimeout(()=>console.log("timed out "), nu)
  }
}
