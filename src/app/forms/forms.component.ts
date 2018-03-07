import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forms: any;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllForms().subscribe(forms => {
      this.forms = forms;
    })
  }

}
