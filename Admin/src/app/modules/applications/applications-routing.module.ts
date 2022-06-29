import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PaymentboardComponent } from 'src/app/affiliates/views/applications-workspace/payments/paymentboard/paymentboard.component';
// import { PaymentspageComponent } from 'src/app/affiliates/views/applications-workspace/payments/paymentspage/paymentspage.component';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsLayoutComponent } from './layouts/applications-layout/applications-layout.component';
import { ApplicationAffiliatesDetailsComponent } from './views/affiliates/application-affiliates-details/application-affiliates-details.component';
import { ApplicationAffiliatesListComponent } from './views/affiliates/application-affiliates-list/application-affiliates-list.component';
import { ApplicationAffiliatesUpdateComponent } from './views/affiliates/application-affiliates-update/application-affiliates-update.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PaymentboardComponent } from './views/payments/paymentboard/paymentboard.component';
import { ApplicationReferralsDetailsComponent } from './views/referrals/application-referrals-details/application-referrals-details.component';
import { ApplicationReferralsListComponent } from './views/referrals/application-referrals-list/application-referrals-list.component';
import { ApplicationReferralsUpdateComponent } from './views/referrals/application-referrals-update/application-referrals-update.component';
import { ApplicationReportComponent } from './views/report/application-report/application-report.component';

const routes: Routes = [{ path: ':id', component: ApplicationsLayoutComponent,
children: [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'affiliates',
  children:[
    { path: '', component: ApplicationAffiliatesListComponent },
    {path : 'details', component: ApplicationAffiliatesDetailsComponent},
    {path : 'update', component: ApplicationAffiliatesUpdateComponent}
  ]},
  { path: 'referrals',
  children:[
    { path: '', component: ApplicationReferralsListComponent },
    {path : 'details', component: ApplicationReferralsDetailsComponent},
    {path : 'update', component: ApplicationReferralsUpdateComponent}
  ]},
  { path: 'report',
  children:[
    { path: '', component: ApplicationReportComponent }
  ]},
  { path: 'payment',
  children:[
    { path: '', component: PaymentboardComponent }
  ]}
  // { path: 'affliatedetails', component: ApplicationAffiliatesDetailsComponent}

 
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
