import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient = +this.route.snapshot.paramMap.get('id');
  }

}
