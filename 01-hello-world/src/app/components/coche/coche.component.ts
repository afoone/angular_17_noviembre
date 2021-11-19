import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  public marca: string;
  public modelo: string;
  public year: number;
  private _hola: string;

  constructor() {
    this.marca = "BMW"
    this.modelo = "M2"
    this.year = 2019
    this._hola ="hola mundo"
  }


  // this.hola
  get hola(): string{
    return this._hola.toUpperCase()
  }

  // this.hola = "adios"
  set hola(hola: string){
    this._hola = hola
  }

  ngOnInit(): void {
  }



}
