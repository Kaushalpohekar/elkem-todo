import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;

  constructor(private router: Router, public authService: AuthService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  CriticalProcess() {
    this.router.navigate(['/table']);
  }

  TimeBased() {
    this.router.navigate(['/time']);
  }

  CriticalProcessByUser() {
    console.log("Click Tbale Buttton");
    this.router.navigate(['/tableByUser']);
  }

  TimeBasedByUser() {
    this.router.navigate(['/timeByUser']);
  }

  Approval() {
    this.router.navigate(['/approval']);
  }

  Logout() {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUserType(): string | null {
    return this.authService.getUserType();
  }

}
