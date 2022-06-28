import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsLayoutComponent } from './layouts/applications-layout/applications-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ApplicationAffiliatesListComponent } from './views/affiliates/application-affiliates-list/application-affiliates-list.component';
import { ApplicationAffiliatesDetailsComponent } from './views/affiliates/application-affiliates-details/application-affiliates-details.component';
import { ApplicationAffiliatesUpdateComponent } from './views/affiliates/application-affiliates-update/application-affiliates-update.component';
import { ApplicationReferralsListComponent } from './views/referrals/application-referrals-list/application-referrals-list.component';
import { ApplicationReferralsDetailsComponent } from './views/referrals/application-referrals-details/application-referrals-details.component';
import { ApplicationReferralsUpdateComponent } from './views/referrals/application-referrals-update/application-referrals-update.component';
import { ApplicationReportComponent } from './views/report/application-report/application-report.component';
import { PaymentboardComponent } from './views/payments/paymentboard/paymentboard.component';
import { MyChartComponent } from './views/report/Charts/my-chart/my-chart.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import { ModalComponent } from './views/modaltest/modal/modal.component';
import { BarChartComponent } from './views/report/Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './views/report/Charts/pie-chart/pie-chart.component';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationsLayoutComponent,
    DashboardComponent,
    ApplicationAffiliatesListComponent,
    ApplicationAffiliatesDetailsComponent,
    ApplicationAffiliatesUpdateComponent,
    ApplicationReferralsListComponent,
    ApplicationReferralsDetailsComponent,
    ApplicationReferralsUpdateComponent,
    ApplicationReportComponent,
    PaymentboardComponent,
    MyChartComponent,
    ModalComponent,
    BarChartComponent,
    PieChartComponent,
    BaseComponent
    // NgxChartsModule,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    NgChartsModule,
    RouterModule
  ]
})
export class ApplicationsModule { }
