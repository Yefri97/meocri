import { Component, OnInit }          from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';

import { FormService }                from '../form.service';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {

  form: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit() {
    var idForm = this.route.snapshot.paramMap.get('id');
    this.formService.getForm(idForm).subscribe(form => {
      this.form = form;
    });
  }

  addField() {
    this.form.fields.push({ question: '' });
  }

  saveForm() {
    this.formService.saveForm(this.form).subscribe(fields => {});
    this.router.navigate(["/forms"]);
  }

}
