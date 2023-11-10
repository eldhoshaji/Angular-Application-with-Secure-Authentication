import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { UserStore } from '../store/user.store';
import { AuthService } from '../backend/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private userStore: UserStore,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenType = req.url.includes('auth/refresh-token') ? 'refresh_token' : 'access_token';

    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.userStore.getUserToken(tokenType)) });
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/login') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.userStore.isLoggedIn()) {

        return this.authService.refreshToken().pipe(
          switchMap((response) => {
            this.isRefreshing = false;
            this.userStore.updateAccessToken(response['access_token'])
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + response['access_token']) });
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;

            if (error.status == '403') {
              this.userStore.clear();
              this.router.navigateByUrl('auth/login');
            }

            return throwError(() => error);
          })
        );
      }
    }

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
