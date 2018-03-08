import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientShowComponent } from './patient-show/patient-show.component';
import { PatientMonitorComponent } from './patient-monitor/patient-monitor.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { FormsComponent } from './forms/forms.component';
import { FormShowComponent } from './form-show/form-show.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { IconsModule } from './icons.module';
import { FormService } from './form.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientCreateComponent,
    PatientShowComponent,
    PatientMonitorComponent,
    PatientEditComponent,
    FormsComponent,
    FormShowComponent,
    FormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
