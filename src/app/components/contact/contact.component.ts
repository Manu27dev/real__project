import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact section">
      <div class="contact__container container grid">
        <div class="container-form">
          <form>
            <input
              type="text"
              class="contact__search-input"
              placeholder="Inserisci il tuo nome.."
            />
            <input
              type="email"
              class="contact__search-input"
              placeholder="Inserisci la tua email.."
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Scrivi qui il tuo messaggio.."
            ></textarea>
          </form>
        </div>

        <div class="contact__content">
          <div class="contact__data">
            <span class="section__subtitle">Contattaci</span>
            <h2 class="section__title">Contattaci facilmente <span>.</span></h2>
            <p class="contact__description">
              Di qualunque necessità tu avessi bisogno, non esitare a
              contattarci tramite la modalità che più preferisci
              <span style="color: var(--second-color);">!</span>
            </p>
          </div>

          <div class="contact__card">
            <div class="contact__card-box">
              <div class="contact__card-info">
                <ion-icon name="call"></ion-icon>
                <div>
                  <h3 class="contact__card-title">Chiamaci</h3>
                  <p class="contact__card-description">075 1025669</p>
                </div>
              </div>

              <button class="button contact__card-button">Chiama ora</button>
            </div>

            <div class="contact__card-box">
              <div class="contact__card-info">
                <ion-icon name="chatbubble"></ion-icon>
                <div>
                  <h3 class="contact__card-title">Scrivici</h3>
                  <p class="contact__card-description">075 1025669</p>
                </div>
              </div>

              <button class="button contact__card-button">Scrivi ora</button>
            </div>

            <div class="contact__card-box">
              <div class="contact__card-info">
                <ion-icon name="videocam"></ion-icon>
                <div>
                  <h3 class="contact__card-title">Videochiamaci</h3>
                  <p class="contact__card-description">075 1025669</p>
                </div>
              </div>

              <button class="button contact__card-button">
                Videochiama ora
              </button>
            </div>

            <div class="contact__card-box">
              <div class="contact__card-info">
                <ion-icon name="mail"></ion-icon>
                <div>
                  <h3 class="contact__card-title">Invia email</h3>
                  <p class="contact__card-description">075 1025669</p>
                </div>
              </div>

              <button class="button contact__card-button">Invia ora</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// <div class="contact__images">
// <div class="contact__orbe"></div>
// <div class="contact__img">
//   <img src="../../../assets/img/image5.webp" alt="" />
// </div>
