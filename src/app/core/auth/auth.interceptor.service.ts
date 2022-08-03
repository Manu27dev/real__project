import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  catchError,
  delay,
  first,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { iif } from 'rxjs';
import { AuthService } from './auth.service';
import { LoaderService } from './loader/loader-service';
import { ThisReceiver } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class AuthInteceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   const token = localStorage.getItem('password');
  //   if (token) {
  //     return next.handle(
  //       req.clone({
  //         setHeaders: { Authorization: `Bearer password ${token}` },
  //       })
  //     );
  //   }
  //   return next.handle(req);
  // }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.isLogged$.pipe(
      first(),
      // return also the last value of password
      withLatestFrom(this.authService.password$),
      // destrutcturing of the array and subscription the observable next handle
      mergeMap(([isLogged, password]) => {
        // verify the condition
        return iif(
          () => isLogged,
          // && req.url.includes('localhost'),
          next.handle(
            // if logged cloning the rwequest and change the header
            req.clone({
              setHeaders: { Authorization: `Bearer password ${password}` },
            })
          ),
          //else return original request
          next.handle(req)
        );
      }),
      // simulate throttling
      delay(1000),
      // error handler
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              // token expired
              break;
            default:
            case 404:
              this.authService.logout();
              break;
          }
        }
        return of(err); // or throwError
      })
    );
  }
}
