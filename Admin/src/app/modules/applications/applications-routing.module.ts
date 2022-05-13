import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsLayoutComponent } from './layouts/applications-layout/applications-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ReferralsComponent } from './views/referrals/referrals.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'referrals',
        component: ReferralsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
