import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(name: string, description: string) {
    this.formService.createForm(name, description).subscribe(form => {});
    this.router.navigate(["/forms"]);
  }

}
