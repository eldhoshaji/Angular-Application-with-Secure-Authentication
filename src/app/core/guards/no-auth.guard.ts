import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStore } from '../store/user.store';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard {
  constructor(private userStore: UserStore, private router: Router) {}

  canActivate(): boolean {
    if (this.userStore.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
