import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {

  form : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = +this.route.snapshot.paramMap.get('id');
  }

}
