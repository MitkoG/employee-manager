import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import kinveyUrls from './kinvey';


@Injectable()
export class EmployeeService {
  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Object> {
    const { getEmployeesUrl } = kinveyUrls;
    let headers = kinveyUrls.createAuthHeader('Basic');
    return this.http.get(getEmployeesUrl, { headers: headers });
  }  
}