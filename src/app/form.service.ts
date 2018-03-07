import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  // Get all the forms from the API
  getAllForms() {
    return this.http.get('/api/forms');
  }

}
