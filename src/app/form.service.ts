import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  // Get all the forms from the API
  getAllForms() {
    return this.http.get('/api/forms');
  }

  // Get the form with the id
  getForm(id: string) {
    return this.http.get('/api/form/' + id);
  }

  // Create a form with a name and a description
  createForm(name: string, description: string) {
    return this.http.post('/api/form/create', { "name": name, "description": description });
  }

  // Update the form
  saveForm(form: any) {
    var id = form._id;
    return this.http.post('/api/form/' + id, { "form": form });
  }

}
