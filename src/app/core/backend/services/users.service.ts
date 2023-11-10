import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersApi } from '../api/users.api';
import { User, UserData, UserResponse } from '../interfaces/users';

@Injectable()
export class UsersService extends UserData {
  constructor(private api: UsersApi) {
    super();
  }

  getCurrentUser(): Observable<User> {
    return this.api.getCurrent();
  }

  get(id: number): Observable<User> {
    return this.api.get(id);
  }

  getRooms(): Observable<User> {
    return this.api.getRooms();
  }

  addResponse(response: UserResponse[]): Observable<any> {
    return this.api.addResponse(response);
  }

  checkResponseExist(room_id: number): Observable<any> {
    return this.api.checkResponseExist(room_id);
  }

}
