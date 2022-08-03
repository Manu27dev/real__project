import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGraphComponent } from './dashboard-graph.component';

const routes: Routes = [{ path: '', component: DashboardGraphComponent }];

@NgModule({
  declarations: [DashboardGraphComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DashboardGraphComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // for ionicons
})
export class DashboardGraph {}
