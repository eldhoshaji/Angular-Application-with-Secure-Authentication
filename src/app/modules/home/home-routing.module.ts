import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
