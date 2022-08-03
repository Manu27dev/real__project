import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../auth/loader/loader-service';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="isLoading$ | async" class="body">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `,
  styles: [
    `
      .body {
        position: relative;
        z-index: 10;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 150px;
        width: 150px; */
        margin: auto;
      }

      .loader {
        position: absolute;
        top: 300px;
        /* position: relative; */
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: animate 1.2s linear infinite;
        background: linear-gradient(hsl(111, 57%, 54%), hsl(228, 62%, 59%));
      }

      @keyframes animate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loader span {
        /* background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd); */
        /* position: absolute;
        top: 300px; */
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: transparent;
      }

      .loader span:nth-child(1) {
        filter: blur(5px);
      }

      .loader span:nth-child(2) {
        filter: blur(10px);
      }

      .loader span:nth-child(3) {
        filter: blur(25px);
      }

      .loader span:nth-child(4) {
        filter: blur(50px);
      }

      .loader:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background: #f1f1f1;
        border: solid white 10px;
        border-radius: 50%;
      }
    `,
  ],
})
export class SpinnerComponent implements OnInit {
  isLoading$: Subject<boolean> = this.loaderService.isLoading$;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}
}
