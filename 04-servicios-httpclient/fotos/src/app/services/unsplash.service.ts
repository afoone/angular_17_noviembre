import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotosResponse } from '../models/fotos';
import { FotosPort } from '../ports/fotosPort';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService implements FotosPort {

  private page: number
  private search: string

  constructor(private http: HttpClient) {
    this.page = 1
    this.search = ""
  }

  getFotos(search: string):Observable<FotosResponse> {
    this.search = search
    this.page = 1
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.search}&client_id=U2sVqVsq5ER151NzFvixBb3TBg5ucyBzhYME6WoZgyM&access_key=2TCc4q0dts2QQOkfJukkNrYV3WjLavBnovMB9S4WZCI`
    )
  }

  moreFotos(): Observable<FotosResponse> {
    this.page++
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.search}&client_id=U2sVqVsq5ER151NzFvixBb3TBg5ucyBzhYME6WoZgyM&access_key=2TCc4q0dts2QQOkfJukkNrYV3WjLavBnovMB9S4WZCI`
    )
  }

}
