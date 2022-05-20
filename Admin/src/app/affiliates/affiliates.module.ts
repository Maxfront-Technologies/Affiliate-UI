import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesComponent } from './affiliates.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';
import { ReferralsCodeListComponent } from './views/referrals/referrals-code-list/referrals-code-list.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AffiliatesComponent,
    AffiliatesListComponent,
    ReferralsCodeListComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    SharedModule,
    NgChartsModule
  ],

})
export class AffiliatesModule { }
