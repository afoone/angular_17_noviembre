import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patients';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {

    console.log("get patients")
    return this.http.get<Patient[]>('http://localhost:3000/patients');
  }
}
