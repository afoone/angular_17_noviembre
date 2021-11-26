import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';

const routes: Routes = [

  {
    path:'', // /about //patients-list
    redirectTo: 'patients/list',
    pathMatch: 'prefix'
  },
  {
    path:'about',
    component: AboutComponent
  },

  {
    path: 'patients/list',
    component: PatientListViewComponent
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
