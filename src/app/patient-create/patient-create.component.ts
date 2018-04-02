import { Component, OnInit } from '@angular/core';

import { PatientService } from '../patient.service';
import { FormService }    from '../form.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  mainForm: any;

  constructor(
    private patientService: PatientService,
    private formService: FormService
  ) { }

  ngOnInit() {
    var idForm = "5aa08e188dad83636edf4c05";
    this.formService.getForm(idForm).subscribe(form => {
      this.mainForm = form;
    });
  }

  save() {}

}
