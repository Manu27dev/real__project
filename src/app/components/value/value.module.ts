import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueComponent } from './value.component';

const routes: Routes = [{ path: '', component: ValueComponent }];

@NgModule({
  declarations: [ValueComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ValueComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ValueModule {}
