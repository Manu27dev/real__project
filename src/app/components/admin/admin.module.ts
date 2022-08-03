import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'graph',
        pathMatch: 'full',
        loadChildren: () =>
          import('./components/dashboard-graph/dashboard-graph.module').then(
            (m) => m.DashboardGraph
          ),
      },
      {
        path: 'modify',
        pathMatch: 'full',
        loadChildren: () =>
          import('./components/modify-product/modify-product.module').then(
            (m) => m.ModifyProduct
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AdminComponent],
})
export class AdminModule {}
