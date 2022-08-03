import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer section">
      <div class="footer__container container grid">
        <div>
          <a href="" class="footer__logo"> Lauvinc </a>
          <p class="footer__description">
            Il miglior modo per acquistare qualunque cosa ti piaccia!
          </p>
        </div>
        <div class="footer__content">
          <div>
            <h3 class="footer__title">About</h3>
            <ul class="footer__links">
              <li>
                <a href="" class="footer__link">About us</a>
              </li>

              <li>
                <a href="" class="footer__link">servizi</a>
              </li>

              <li>
                <a href="" class="footer__link">Novita e blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="footer__title">Compagnia</h3>
            <ul class="footer__links">
              <li>
                <a href="" class="footer__link">Come lavoriamo</a>
              </li>

              <li>
                <a href="" class="footer__link">Capitale</a>
              </li>

              <li>
                <a href="" class="footer__link">Sicurezza</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="footer__title">Supporto</h3>
            <ul class="footer__links">
              <li>
                <a href="" class="footer__link">Faqs</a>
              </li>

              <li>
                <a href="" class="footer__link">Supporto centrale</a>
              </li>

              <li>
                <a href="" class="footer__link">Contattaci</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="footer__title">Seguici</h3>
            <ul class="footer__social">
              <a href="" class="footer__social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a href="" class="footer__social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href="" class="footer__social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__info container">
        <span class="footer__copy"
          >&#169; Emanuele Cuomo. Tutti i diritti sono riservati</span
        >

        <div class="footer__privacy">
          <a href="">Termini e condizioni</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
