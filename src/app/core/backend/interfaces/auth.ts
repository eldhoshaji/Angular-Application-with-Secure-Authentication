import { Observable } from 'rxjs';

export interface Token {
  access_token : string;
  refresh_token: string;
}

export abstract class AuthData {
  abstract login(credentials: any): Observable<Token>;
  abstract refreshToken(tokens: any): Observable<Token>;
}
