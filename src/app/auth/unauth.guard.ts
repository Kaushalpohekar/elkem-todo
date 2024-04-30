import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const userType = this.authService.getUserType();
    if (this.authService.isLoggedIn()) {
      if(userType === 'Owner'){
        return this.router.createUrlTree(['/table']);
      } else {
        return this.router.createUrlTree(['/tableByUser']);
      }
      
    }
    return true;
  }
}
