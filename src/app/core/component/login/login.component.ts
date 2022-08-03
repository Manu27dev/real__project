import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserValidatorsService } from 'src/app/shared/forms/user-validator.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="main-form">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form [formGroup]="formSignin">
          <label for="chk" aria-hidden="true">Sign up</label>
          <input
            formControlName="username"
            type="text"
            name="text"
            placeholder="User name"
          />
          <input
            formControlName="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            formControlName="password"
          />
          <button>Sign up</button>
        </form>
      </div>

      <div class="login">
        <form [formGroup]="formLogin" (submit)="login()">
          <label for="chk" aria-hidden="true">Login</label>
          <div class="spin">
            <app-spinner-small
              *ngIf="formLogin.get('email')?.pending"
            ></app-spinner-small>
          </div>
          <div class="spin-check">
            <app-spinner-check
              *ngIf="formLogin.get('email')?.valid"
            ></app-spinner-check>
          </div>
          <input
            [ngClass]="{
              'invalid-form': formLogin.get('email')?.invalid && formLogin.dirty
            }"
            formControlName="email"
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            name="pswd"
            placeholder="Password"
            formControlName="password"
          />
          <button [disabled]="formLogin.invalid || formLogin.pending">
            Login
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .spin {
        display: flex;
        position: absolute;
        top: 65px;
        left: 30px;
        width: 1px;
        height: 1px;
      }
      .spin-check {
        display: flex;
        position: absolute;
        top: 117px;
        left: 30px;
        width: 1px;
        height: 1px;
      }

      .main-form {
        margin: 4rem auto;
        width: 350px;
        height: 500px;
        background: red;
        overflow: hidden;
        background: url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')
          no-repeat center/ cover;
        border-radius: 10px;
        box-shadow: 5px 20px 50px #000;
      }
      #chk {
        display: none;
      }
      .signup {
        position: relative;
        width: 100%;
        height: 100%;
      }
      label {
        /* color: #fff; */
        font-size: 2.3em;
        justify-content: center;
        display: flex;
        margin: 60px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s ease-in-out;
      }
      input {
        width: 60%;
        height: 20px;
        /* background: hsl(228, 99%, 98%); */
        justify-content: center;
        display: flex;
        margin: 20px auto;
        padding: 1rem;
        border: 3px solid hsl(228, 99%, 98%);
        outline: none;
        border-radius: 5px;
      }
      button {
        width: 60%;
        height: 40px;
        margin: 10px auto;
        justify-content: center;
        display: block;
        /* color: #fff; */
        background: hsl(111, 57%, 54%);
        font-size: 1em;
        font-weight: bold;
        margin-top: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: 0.2s ease-in;
        cursor: pointer;
      }
      button:hover {
        background: hsl(228, 15%, 50%);
        color: hsl(111, 57%, 54%);
      }
      .login {
        height: 460px;
        background: hsl(228, 62%, 59%);
        border-radius: 60% / 10%;
        transform: translateY(-180px);
        transition: 0.8s ease-in-out;
      }
      .login form {
        position: relative;
      }

      .login label {
        color: hsl(228, 57%, 28%);
        transform: scale(0.6);
      }

      #chk:checked ~ .login {
        transform: translateY(-500px);
      }
      #chk:checked ~ .login label {
        transform: scale(1);
      }
      #chk:checked ~ .signup label {
        transform: scale(0.6);
      }
      .invalid-form {
        background-color: ivory;
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  formSignin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private userService: UserValidatorsService
  ) {
    (this.formSignin = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })),
      (this.formLogin = this.fb.group({
        email: ['', [Validators.required], this.userService.userMailIsValid()], // async validator
        password: ['', [Validators.required]],
      }));
  }

  login() {
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password);
  }

  ngOnInit(): void {}
}
