import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsLayoutComponent } from './layouts/applications-layout/applications-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ReferralsComponent } from './views/referrals/referrals.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationsLayoutComponent,
    DashboardComponent,
    ReferralsComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
