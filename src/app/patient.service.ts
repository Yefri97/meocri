import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }

}
