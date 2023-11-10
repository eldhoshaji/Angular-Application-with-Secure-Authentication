import { Injectable } from '@angular/core';
import { User } from '../backend/interfaces/users';

const USER_KEY = 'auth-user';
const USER_ID = 'user-id';

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  user: User | undefined;

  constructor() {}

  clear(): void {
    localStorage.clear();
  }

  public saveUserToken(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public updateAccessToken(access_token: any): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
        let userJson = JSON.parse(user);
        userJson['access_token'] = access_token
        localStorage.setItem(USER_KEY, JSON.stringify(userJson));
    }
  }

  public getUserToken(type?: any): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      if(type == 'access_token' || type == 'refresh_token') {
        return JSON.parse(user)[type];
      }
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public saveUser(user: User){
    this.user = user;
    localStorage.setItem(USER_ID, JSON.stringify(user.user_id))
  }

  public getUser() {
    return this.user
  }

  public getUserId() {
    const user_id = localStorage.getItem(USER_ID);
    return Number(user_id)
  }

  public isAdmin() {
    if(this.user?.role_id !=3){
      return true
    }
    return false
  }
}
