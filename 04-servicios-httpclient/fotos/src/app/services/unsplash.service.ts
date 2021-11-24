import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotosResponse } from '../models/fotos';
import { FotosPort } from '../ports/fotosPort';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService implements FotosPort {

  constructor(private http: HttpClient) { }

  getFotos():Observable<FotosResponse> {
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=1&query=malaga&client_id=U2sVqVsq5ER151NzFvixBb3TBg5ucyBzhYME6WoZgyM&access_key=2TCc4q0dts2QQOkfJukkNrYV3WjLavBnovMB9S4WZCI`
    )
  }

}
