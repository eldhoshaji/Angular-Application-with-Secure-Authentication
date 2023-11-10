/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { UserResponse } from '../interfaces/users';

@Injectable()
export class UsersApi {
  private readonly apiController: string = 'user';

  constructor(private http: HttpService) { }

  getCurrent(): Observable<any> {
    return this.http.get(`${this.apiController}`);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  getRooms() {
    return this.http.get(`${this.apiController}/rooms`);
  }

  checkResponseExist(room_id: number) {
    return this.http.get(`${this.apiController}/${room_id}/response/exist`);
  }

  addResponse(response: UserResponse[]) {
    return this.http.post(`${this.apiController}/response`, response);
  }
}
