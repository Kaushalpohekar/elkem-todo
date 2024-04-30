import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient, private router: Router) {}

  //private readonly API_URL = 'https://senso.senselive.in/elkem';
  private readonly API_URL = 'http://localhost:3050/elkem';

  getALlUserdata(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllSchedule`);
  }
  

  getALltask(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/countTasks`);
  }

  approvalRequest(data: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/approvalRequest`, data);
  }
}

