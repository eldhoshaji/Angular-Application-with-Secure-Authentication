import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './screens/admin-dashboard/admin-dashboard.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ]
})
export class AdminPanelModule { }
