import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserAuthService} from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.userAuthService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
