import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  // Get all the forms from the API
  getAllForms() {
    return this.http.get('/api/forms');
  }

  createForm(name: string, description: string) {
    return this.http.post('/api/form/create', { "name": name, "description": description });
  }

  getForm(id: string) {
    return this.http.get('/api/form/' + id);
  }

  saveForm(id: string, fields: any[]) {
    return this.http.post('/api/form/' + id, { "fields": fields });
  }

}
