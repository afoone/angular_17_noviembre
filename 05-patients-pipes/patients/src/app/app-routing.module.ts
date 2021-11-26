import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DiagnosticosComponent } from './components/diagnosticos/diagnosticos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientsFormComponent } from './components/patients-form/patients-form.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';

const routes: Routes = [
  {
    path:'', // /about //patients-list
    redirectTo: 'patients/list',
    pathMatch: 'full'
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'diagnostics/new',
    component: DiagnosticosComponent
  },
  {
    path: 'patients/list',
    component: PatientListViewComponent
  },
  {
    path: 'patients/new',
    component: PatientsFormComponent
  },
  {
    path: 'patients/:id',
    component: PatientsFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
