import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {

  form : any;
  fields: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit() {
    var idForm = this.route.snapshot.paramMap.get('id');
    this.formService.getForm(idForm).subscribe(form => {
      this.form = form;
      this.fields = this.form.fields;
    });
  }

  addField() {
    this.fields.push({ question: '' });
  }

  saveForm() {
    this.formService.saveForm(this.form._id, this.fields).subscribe(fields => {});
    this.router.navigate(["/forms"]);
  }

}
