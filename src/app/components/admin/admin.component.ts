import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <!-- <button [routerLink]="'graph'" style="margin: 30px; padding: 20px;">
      dashboard
    </button>
    <button [routerLink]="'modify'" style="margin: 30px; padding: 20px;">
      changeme
    </button> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
