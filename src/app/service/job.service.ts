import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private REST_API_SERVER = "/coty_api/v1/job-list?_format=json";

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin'),
    })
  };

  public getRequest(){
    return this.httpClient.get(this.REST_API_SERVER, this.httpOptions);
  }
}
