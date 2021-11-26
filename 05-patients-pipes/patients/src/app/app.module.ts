import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientNamePipe } from './pipes/patient-name.pipe';
import { Suma100Pipe } from './pipes/suma-100.pipe';
import { PatientsFormComponent } from './components/patients-form/patients-form.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiagnosticosComponent } from './components/diagnosticos/diagnosticos.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientNamePipe,
    Suma100Pipe,
    PatientsFormComponent,
    AboutComponent,
    HeaderComponent,
    NotFoundComponent,
    PatientListViewComponent,
    DiagnosticosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
