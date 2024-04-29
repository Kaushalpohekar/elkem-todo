import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private readonly API_URL = 'https://senso.senselive.in/elkem';
  //private readonly API_URL = 'http://localhost:3050/elkem';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, loginData).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  setUserType(userType: string): void {
    sessionStorage.setItem('userType', userType);
  }

  getUserType(): string | null {
    return sessionStorage.getItem('userType');
  }

  setUserMail(personalemail: string): void {
    sessionStorage.setItem('personalemail', personalemail);
  }

  getUserMail(): string | null {
    return sessionStorage.getItem('personalemail');
  }

  setToken(token: string): void {
    this.token = token;
    sessionStorage.setItem('token', token);
    this.getUserDetails();
  }

  getToken(): string | null {
    return this.token || sessionStorage.getItem('token');
  }

 logout(): void {
      sessionStorage.removeItem('token');
      sessionStorage.clear();
      this.token = null;
      setTimeout(() => {
          this.router.navigate(['/login']);
      }, 500);
  }


  getUserDetails(): void {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      this.http.get(`${this.API_URL}/user`, { headers }).pipe(
        catchError(this.handleError)
      ).subscribe(
        (user: any) => {
          const userType = user?.usertype;
          const userId = user?.userid;
          const personalemail = user?.personalemail;
          if (userType && userId && personalemail) {
            this.setUserType(userType);
            this.setUserMail(personalemail);
            sessionStorage.setItem('UserId', userId);
          } else {
            this.handleError("Invalid user data received");
          }
        },
        error => this.handleError(error)
      );
    }
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error) {
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = error.error.message || errorMessage;
        } else {
            // Server-side error
            errorMessage = `Server Error: ${error.status || 'Unknown'}\nMessage: ${error.message || 'Unknown'}`;
        }
    }
    return throwError(errorMessage);
  }

}
