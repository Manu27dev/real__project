import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';
import { GetProductService } from 'src/app/services/get-product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-product',
  template: `
    <section class="popular section">
      <div class="container">
        <span class="section__subtitle">Ottime scelte</span>
        <h2 class="section__title">Prodotti Popolari <span>.</span></h2>
        <div class="popular__container swiper">
          <div class="swiper-wrapper">
            <swiper [config]="config">
              <!-- (swiper)="onSwiper($event)"
              (slideChange)="onSlideChange()" -->
              <ng-container *ngFor="let product of products$ | async">
                <ng-template swiperSlide>
                  <article class="popular__card swiper-slide">
                    <img
                      src="{{ product.imageUrl }}"
                      alt=""
                      class="popular__img"
                    />
                    <div class="popular__data">
                      <h2 class="popular__price">
                        {{ product.price | currency: 'EUR' }} <span>$</span>
                      </h2>
                      <h3 class="popular__title">{{ product.title }}</h3>
                      <p class="popular__description">
                        {{ product.description }}
                      </p>
                    </div>
                  </article>
                </ng-template>
              </ng-container>
            </swiper>
          </div>
        </div>
      </div>

      <!-- <button [routerLink]="'/users/' + 1">save</button> -->
    </section>
  `,
  styles: [],
})
export class ProductComponent implements OnInit {
  constructor(public getProductService: GetProductService) {}

  products$: BehaviorSubject<Product[] | null> =
    this.getProductService.products$;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  // onSwiper([swiper]: any) {
  // }
  // onSlideChange() {
  // }

  ngOnInit(): void {}
}
