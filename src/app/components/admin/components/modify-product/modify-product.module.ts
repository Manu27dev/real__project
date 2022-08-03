import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyProductComponent } from './modify-product.component';

const routes: Routes = [{ path: '', component: ModifyProductComponent }];

@NgModule({
  declarations: [ModifyProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ModifyProductComponent],
})
export class ModifyProduct {}
