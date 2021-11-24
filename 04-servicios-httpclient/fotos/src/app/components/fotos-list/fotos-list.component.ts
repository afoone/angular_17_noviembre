import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Foto } from 'src/app/models/fotos';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'imagina-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css']
})
export class FotosListComponent implements OnInit, DoCheck, OnChanges {


  @Input("search")
  public search: string | undefined;

  public fotos: Foto[]

  constructor(private fotosService: UnsplashService) {
    console.log("constructor")
    this.fotos = []
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes", this.search, changes)
    changes["search"] && this.fotosService.getFotos(this.search || "").subscribe(
      res => this.fotos = res.results
    )
  }

  ngDoCheck(): void {
    console.log("do check")
  }

  ngOnInit(): void {
    // ir a por las fotos, usando el servicio
    console.log("onInit")
    // this.fotosService.getFotos(this.search || "").subscribe(
    //   res => this.fotos = res.results
    // )
  }

  moreFotos(): void {
    this.fotosService.moreFotos().subscribe(
      res => this.fotos.push(...res.results) //this.fotos = [...this.fotos, ...res.results]
    )
  }

}
