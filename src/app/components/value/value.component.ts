import { Component, Input, OnInit } from '@angular/core';
import { GetProductService } from './../../services/get-product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../model/product';

@Component({
  selector: 'app-value',
  template: `
    <section class="value section">
      <div class="value__container container grid">
        <div class="value__images">
          <div class="value__orbe"></div>
          <div class="value__img">
            <img *ngIf="active" src="{{ active.imageUrl }}" alt="" />

            <h2 *ngIf="active" class="section__title">{{ active.title }}</h2>
            <p *ngIf="active" class="value__description">
              {{ active.description }}
            </p>
          </div>
        </div>
        <div class="value__content">
          <div class="value__data">
            <span class="section__subtitle">Scelti per te</span>
            <h2 class="section__title">Prodotti ricercati</h2>
            <p class="value__description">
              Una lista di prodotti realizzata in base al trend di mercato!
            </p>
          </div>

          <div
            class="value__accordion"
            *ngFor="let news of getProductService.products$ | async"
          >
            <div class="value__accordion-item">
              <header class="value__accordion-header">
                <ion-icon
                  name="shield-checkmark value__accordion-icon"
                ></ion-icon>
                <h3 class="value__accordion-title">{{ news.title }}</h3>
                <div (click)="toggle()" class="value__accordion-arrow">
                  <ion-icon name="caret-down"></ion-icon>
                </div>
              </header>

              <div *ngIf="open" class="value__accordion-content">
                <img
                  (click)="setActive(news)"
                  src="{{ news.imageUrl }}"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <app-product></app-product> -->

    <!-- <app-contact></app-contact> -->
    <!-- <p class="value__accordion-description">
        Provvediamo a farti avere il prezzo migliore per te,
        garantiamo che il prezzo non cambierà nelle tue proprietà
      </p> -->
  `,
  styles: [],
})
export class ValueComponent implements OnInit {
  // @Input() productsNews!: ProductNews[] | any;
  @Input() products!: Product | any;

  active!: Product;
  open: boolean = false;

  constructor(public getProductService: GetProductService) {}

  toggle() {
    this.open = !this.open;
  }

  setActive(news: Product) {
    this.active = news;
  }

  ngOnInit(): void {}
}
