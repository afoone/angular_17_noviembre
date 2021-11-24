import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FotosResponse } from "../models/fotos";

export interface FotosPort {
  getFotos(search: string): Observable<FotosResponse>

  moreFotos(): Observable<FotosResponse>
}
