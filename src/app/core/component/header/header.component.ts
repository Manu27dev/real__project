import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="nav container">
        <a href="" class="nav__logo"> Lauvinc </a>

        <div class="nav__menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a
                [routerLink]="'/home/more'"
                [routerLinkActive]="['active__link']"
                href=""
                class="nav__link"
              >
                <ion-icon name="home-outline"></ion-icon>
                <span>Home</span>
              </a>
            </li>
            <li class="nav__item">
              <a
                [routerLink]="'/home/product'"
                [routerLinkActive]="['active__link']"
                href=""
                class="nav__link"
              >
                <ion-icon name="gift-outline"></ion-icon>
                <span>Product</span>
              </a>
            </li>
            <li class="nav__item">
              <a
                [routerLink]="'/home/contact'"
                [routerLinkActive]="['active__link']"
                href=""
                class="nav__link"
              >
                <ion-icon name="call-outline"></ion-icon>
                <span>Contact</span>
              </a>
            </li>
            <li class="nav__item">
              <a
                [routerLink]="'/login'"
                [routerLinkActive]="['active__link']"
                href=""
                class="nav__link"
              >
                <ion-icon
                  style="transform: rotate(-180deg);"
                  name="log-in-outline"
                ></ion-icon>
                <span>Accedi</span>
              </a>
            </li>
            <li
              *ngIf="(authService.role$ | async) === 'admin'"
              class="nav__item"
            >
              <a
                [routerLink]="'/admin'"
                [routerLinkActive]="['active__link']"
                href=""
                class="nav__link"
              >
                <ion-icon name="people-outline"></ion-icon>
                <span>Admin</span>
              </a>
            </li>
            <li *ngIf="authService.isLogged$" class="nav__item">
              <a class="nav__link">
                <ion-icon name="log-out-outline"></ion-icon>
                <span
                  (click)="logout()"
                  *ngIf="(authService.auth$ | async) !== null"
                  >Logout <br />
                  {{ authService.displayName$ | async }}</span
                >
              </a>
            </li>
          </ul>
        </div>

        <ion-icon
          [routerLink]="'/cart'"
          style="margin-left: 30px;"
          name="cart-outline"
        ></ion-icon>
      </nav>
    </header>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
