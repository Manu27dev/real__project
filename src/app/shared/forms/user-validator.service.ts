import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, switchMap, timer } from 'rxjs';
import { Auth } from 'src/app/core/auth/auth.interface';
@Injectable({
  providedIn: 'root',
})
export class UserValidatorsService {
  constructor(private http: HttpClient) {}

  userMailIsValid() {
    return (control: FormControl) => {
      // debounce
      return timer(1000).pipe(
        //check if username exist
        switchMap(() =>
          this.http.get<Auth>(
            `http://localhost:3000/login?email=${control.value}`
          )
        ),
        map((res) =>
          res.email === control.value ? null : { userNotExists: true }
        )
      );
    };
  }
}
