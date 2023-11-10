import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../backend/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.usersService.getCurrentUser().pipe(
      map(userDetails => {
        if (userDetails.role_id === 1 || userDetails.role_id === 2) {
          return true; // Allow access to admin-panel for admins
        } else {
          return this.router.createUrlTree(['/home']); // Replace with your home/dashboard route
        }
      })
    );
  }
}
