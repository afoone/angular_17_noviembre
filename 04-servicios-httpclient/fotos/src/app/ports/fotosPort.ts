import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FotosResponse } from "../models/fotos";

export interface FotosPort {
  getFotos(): Observable<FotosResponse>
}
