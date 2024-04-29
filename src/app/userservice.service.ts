import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient, private router: Router) {}
  public pageLoading = true;

  public isPageLoading(isLoading: boolean) {
    this.pageLoading = isLoading;
  }


  private readonly API_URL = 'https://senso.senselive.in/elkem';
  //private readonly API_URL = 'http://localhost:3050/elkem';

  getALlUserdata(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllSchedule`);
  }
  

  getALltask(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/countTasks`);
  }

  approvalRequest(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/approvalRequest`, data);
  }

  getTimeBasedMainTask(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllMainTask`);
  }

  getTimeBasedSubTask(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllSubTask`);
  }

  approvalRequestforSubTask(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/approvalRequestForSubTask`, data);
  }

  AllApprovalRequestByOwner(admin_email: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllApprovalRequestByOwner/${admin_email}`);
  }

  markAsApproved(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/markAsApproved`, data);
  }

  markAsUnApproved(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/markAsUnApproved`, data);
  }

  AllScheduleByUser(Email: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllScheduleByUser/${Email}`);
  }
  
  AllMainTaskByUser(Email: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllMainTaskByUser/${Email}`);
  }
  
  AllSubTaskByUser(Email: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/AllSubTaskByUser/${Email}`);
  }
  
  countTasksByUser(Email: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/countTasksByUser/${Email}`);
  }
}

