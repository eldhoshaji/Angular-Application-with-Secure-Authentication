/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApi } from '../api/auth.api';
import { AuthData, Token } from '../interfaces/auth';

@Injectable()
export class AuthService extends AuthData {
  constructor(private api: AuthApi) {
    super();
  }

  login(credentials: any): Observable<Token> {
    return this.api.login(credentials);
  }

  refreshToken(): Observable<Token> {
    return this.api.refreshToken();
  }

  signup(credentials: any): Observable<Token> {
    return this.api.signup(credentials);
  }
}
