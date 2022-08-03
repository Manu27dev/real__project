import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/core/component/footer/footer.component';
import { HeaderComponent } from 'src/app/core/component/header/header.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'more',
        loadChildren: () =>
          import('../value/value.module').then((m) => m.ValueModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import(
            '../../core/partial/product-details/product-details.module'
          ).then((m) => m.ProductDetailsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HomeComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
