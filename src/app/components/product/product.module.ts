import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SwiperModule, RouterModule.forChild(routes)],
  exports: [ProductComponent],
})
export class ProductModule {}
