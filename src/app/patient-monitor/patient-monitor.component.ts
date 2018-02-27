import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.css']
})
export class PatientMonitorComponent implements OnInit {

  patient : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient = +this.route.snapshot.paramMap.get('id');
  }

}
