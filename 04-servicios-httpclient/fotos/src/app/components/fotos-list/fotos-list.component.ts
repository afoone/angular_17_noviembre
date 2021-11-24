import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/fotos';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'imagina-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css']
})
export class FotosListComponent implements OnInit {


  public fotos: Foto[]

  constructor(private fotosService: UnsplashService) {
    this.fotos = []
   }

  ngOnInit(): void {
    // ir a por las fotos, usando el servicio
    this.fotosService.getFotos().subscribe(
      res => this.fotos = res.results
    )
  }

}
