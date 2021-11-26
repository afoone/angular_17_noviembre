import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patients';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.css'],
})
export class PatientsFormComponent implements OnInit {
  public patient: Patient;
  public id: string | undefined;

  constructor(
    private patientsService: PatientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.patient = {
      name: '',
    };
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.id &&
        patientsService
          .getPatient(this.id)
          .subscribe((p) => (this.patient = p));
    });
  }

  ngOnInit(): void {}

  savePatient() {
    this.patientsService
      .savePatient(this.patient)
      .subscribe(() => this.router.navigate(['/patients/list']));
  }
}
