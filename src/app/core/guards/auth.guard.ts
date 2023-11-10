import { ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserStore } from '../store/user.store';

@Injectable({
  providedIn: 'root', // Make sure the guard is provided at the root level
})
export class AuthGuard {
  constructor(private userStore: UserStore) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated using a function from AuthService
    const isAuthenticated = this.userStore.isLoggedIn();
    return isAuthenticated;
  }
}
