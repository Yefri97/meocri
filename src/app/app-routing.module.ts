import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PatientsComponent }        from './patients/patients.component';
import { PatientCreateComponent }   from './patient-create/patient-create.component';
import { PatientShowComponent }     from './patient-show/patient-show.component';
import { PatientMonitorComponent }  from './patient-monitor/patient-monitor.component';
import { PatientEditComponent }     from './patient-edit/patient-edit.component';

import { FormsComponent }           from './forms/forms.component';
import { FormCreateComponent }      from './form-create/form-create.component';
import { FormShowComponent }        from './form-show/form-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsComponent },
  { path: 'patient/create', component: PatientCreateComponent },
  { path: 'patient/:id', component: PatientShowComponent },
  { path: 'patient/:id/monitor', component: PatientMonitorComponent },
  { path: 'patient/:id/edit', component: PatientEditComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'form/create', component: FormCreateComponent },
  { path: 'form/:id', component: FormShowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
