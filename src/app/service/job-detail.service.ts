import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor(private httpClient: httpClient) { }

  private REST_API_SERVER = "/coty_api/v1/job";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin'),
    })
  };

  public getRequest(jobId){
    this.REST_API_SERVER = this.REST_API_SERVER + jobId + "?_format=json";
    return this.httpClient.get(this.REST_API_SERVER, this.httpOptions);
  }
}
