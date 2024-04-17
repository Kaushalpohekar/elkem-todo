import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient, private router: Router) {}

  private readonly API_URL = 'http://localhost:3000';

  getALlUserdata(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/AllSchedule`);
  }
  

  getALltask(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/countTasks`);
  }
}

