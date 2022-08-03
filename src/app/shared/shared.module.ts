import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerCheckComponent } from '../core/partial/spinner-check/spinner-check.component';
import { SpinnerSmallComponent } from '../core/partial/spinner-small/spinner-small.component';
import { SpinnerComponent } from '../core/partial/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerSmallComponent,
    SpinnerCheckComponent,
  ],
  imports: [CommonModule],
  exports: [SpinnerComponent, SpinnerSmallComponent, SpinnerCheckComponent],
})
export class SharedModule {}
