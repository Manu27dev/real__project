import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Auth, UserRoles } from './auth.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth$: BehaviorSubject<Auth | null> = new BehaviorSubject<Auth | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.auth$.next(JSON.parse(localStorage.getItem('auth') as any));
  }

  login(email: string, password: string): void {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    this.http
      .get<Auth>('http://localhost:3000/login', { params })
      .subscribe((res) => {
        this.auth$.next(res);
        localStorage.setItem('auth', JSON.stringify(res));
        this.router.navigateByUrl('home/product');
      });
  }

  logout(): void {
    this.auth$.next(null);
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/');
  }

  get isLogged$(): Observable<boolean> {
    return this.auth$.pipe(map((value) => !!value));
  }

  get role$(): Observable<UserRoles> | any {
    return this.auth$.pipe(map((auth) => auth?.role));
  }

  get password$(): Observable<string> | any {
    return this.auth$.pipe(map((auth) => auth?.password));
  }

  get displayName$(): Observable<string> | any {
    return this.auth$.pipe(map((auth) => auth?.displayName));
  }
}
