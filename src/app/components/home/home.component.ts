import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <section class="home section">
      <div class="home__container container grid">
        <div class="home__data">
          <h1 class="home__title">
            Esplora i prodotti più adatti a te <span>.</span>
          </h1>
          <p class="home__description">
            Cerca tra una varietà di prodotti in modo semplice, cercare e
            trovare non è mai stato cosi facile!
          </p>
          <form class="home__search">
            <ion-icon name="search"></ion-icon>
            <input
              #search
              type="text"
              class="home__search-input"
              placeholder="Cerca tra prodotti e categorie.."
            />
            <!-- (keyup)="doFilter(search.value)" -->
            <div class="search-result" *ngIf="result">{{ result }}</div>
            <button class="button">Cerca</button>
          </form>
          <!-- <div class="home__value">
            <div>
              <h1 class="home__value-number">9k <span>+</span></h1>
              <span class="home__value-description">
                Prodotti <br />Premium
              </span>
            </div>
            <div>
              <h1 class="home__value-number">2k <span>+</span></h1>
              <span class="home__value-description">
                Ottimi <br />
                Servizi
              </span>
            </div>
            <div>
              <h1 class="home__value-number">29k <span>+</span></h1>
              <span class="home__value-description"
                >Pluri <br />
                Premiato
              </span>
            </div>
          </div> -->
        </div>
        <div class="home__images">
          <div class="home__orbe"></div>
          <div class="home__img">
            <img src="../assets/img/home_image.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}
  result!: string;

  // doFilter(search: string): void {
  //   this.filterProduct.emit(search.trim().toLowerCase());
  //   this.result = search;
  // }

  ngOnInit(): void {}
}
