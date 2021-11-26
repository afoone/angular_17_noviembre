import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css'],
})
export class DiagnosticosComponent implements OnInit {
  public diagnosticoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.diagnosticoForm = fb.group({
      code: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
