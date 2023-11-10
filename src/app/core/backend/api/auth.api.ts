import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable()
export class AuthApi {
  private readonly apiController: string = 'auth';

  constructor(private http: HttpService) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiController}/login`, credentials);
  }

  refreshToken(): Observable<any> {
    return this.http.get(`${this.apiController}/refresh-token`);
  }

  signup(credentials: any): Observable<any> {
    return this.http.post(`${this.apiController}/signup`, credentials);
  }
}
