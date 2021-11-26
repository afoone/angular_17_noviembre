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
    return this.http.get<Patient[]>('http://localhost:3000/patients');
  }

  savePatient(p: Patient): Observable<Patient> {
    if (p.id) {
      return this.http.put<Patient>(`http://localhost:3000/patients/${p.id}`, p)
    } else {
      return this.http.post<Patient>('http://localhost:3000/patients', p)
    }
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/patients/${id}`);
  }

  getPatient(id: string) : Observable<Patient> {
    return this.http.get<Patient>(`http://localhost:3000/patients/${id}`)
  }
}
