import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-patient-show',
  templateUrl: './patient-show.component.html',
  styleUrls: ['./patient-show.component.css']
})
export class PatientShowComponent implements OnInit {

  patient : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient = +this.route.snapshot.paramMap.get('id');
  }

}
