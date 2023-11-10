import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './screens/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin-panel/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
