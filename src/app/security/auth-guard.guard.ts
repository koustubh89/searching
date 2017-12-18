import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggedInUser = this.authService.getLoggedInUser();
    if (loggedInUser.role === 'ADMIN') {
      return true;
    } else {
      console.log('Unauthorized to open link: ' + state.url);
      return false;
    }
  }
}
