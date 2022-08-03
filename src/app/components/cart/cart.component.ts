import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div class="card">
      <img src="./img/image-7.jpg" alt="" class="card__image" />
      <div class="card__info">
        <h4 class="card__title">Build Layouts with CSS Grid</h4>
        <p class="card__text">John Doe</p>
        <p class="card__price">$400</p>
        <button class="card__btn add-to-cart" data-id="13">Add to Cart</button>
      </div>
    </div>
  `,
  styles: [``],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
