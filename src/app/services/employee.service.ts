import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem("access_token")
    });

    return this.http.get<Array<Employee>>(environment.BASE_RES_URL + "/users", {headers})
  }
}
