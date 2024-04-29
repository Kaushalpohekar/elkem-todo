// page.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserType } from './user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUserType = this.authService.getUserType(); // Assuming a method to get the current user type
    const expectedUserType = route.data['userType'] as UserType;
    if (currentUserType === expectedUserType) {
      return true;
    } else {
      if (currentUserType === UserType.Owner) {
        this.router.navigate(['/table']);
      } else if (currentUserType === UserType.Responsibility) {
        this.router.navigate(['/tableByUser']);
      } else {
        this.router.navigate(['/login']); // Or any other default route
      }
      return false;
    }
  }
}
