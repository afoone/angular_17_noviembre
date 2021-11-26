import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patients';
import { PatientsService } from '../../services/patients.service';
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements OnInit {
  public patients: Patient[];

  constructor(private patientsService: PatientsService) {
    this.patients = [];
  }

  ngOnInit(): void {
    console.log('on init');
    this.patientsService
      .getPatients()
      .subscribe((res) => (this.patients = res));
  }

  delete(id: number | undefined) {
    if (!id) return;
    this.patientsService
      .deletePatient(id + '')
      .subscribe(
        () => (this.patients = this.patients.filter((p) => p.id !== id))
      );
  }
}
