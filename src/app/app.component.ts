// import { Component, OnInit } from '@angular/core';
// import { Product } from './model/interface/product.interface';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- *ngIf="isAuthenticated" -->
//     <ng-container>
//       <app-header></app-header>
//       <!-- <be-tse-menu *ngIf="hasMenuPermission"></be-tse-menu> -->
//     </ng-container>

//     <main class="main">
//       <router-outlet></router-outlet>
//     </main>
//     <!-- <be-tse-loader></be-tse-loader>
//   <be-tse-server-error-toast></be-tse-server-error-toast> -->

//     <app-footer></app-footer>

//     <!-- <div [ngClass]="isAuthenticated ? 'page-container' : 'h-100'">
// </div>
// <be-tse-footer *ngIf="isAuthenticated"></be-tse-footer> -->
//   `,
//   styles: [],
// })
// export class AppComponent implements OnInit {
//   constructor(private http: HttpClient) {}

//   products!: Product[] | null;

//   getProduct() {
//     this.http
//       .get<Product[]>('http://localhost:3000/products')
//       .subscribe((res) => (this.products = res));
//   }

//   ngOnInit(): void {
//     this.getProduct();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  template: `
    <!-- *ngIf="isAuthenticated" -->
    <ng-container>
      <!-- <app-home></app-home> -->
      <!-- <be-tse-menu *ngIf="hasMenuPermission"></be-tse-menu> -->
    </ng-container>
    <main class="main">
      <app-spinner></app-spinner>
      <router-outlet></router-outlet>
    </main>
    <!-- <be-tse-loader></be-tse-loader>
    <be-tse-server-error-toast></be-tse-server-error-toast> -->

    <!-- <app-footer></app-footer> -->

    <!-- <div [ngClass]="isAuthenticated ? 'page-container' : 'h-100'">
</div>
<be-tse-footer *ngIf="isAuthenticated"></be-tse-footer> -->
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  products!: Product[] | null;

  getProduct() {
    this.http
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((res) => (this.products = res));
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
