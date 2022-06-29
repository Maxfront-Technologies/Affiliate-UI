import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesComponent } from './affiliates.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';
import { ReferralsCodeListComponent } from './views/referrals/referrals-code-list/referrals-code-list.component';
import { NgChartsModule } from 'ng2-charts';
import { ReferralsCreateComponent } from './views/referrals/referrals-create/referrals-create.component';
import { ReferralsEditComponent } from './views/referrals/referrals-edit/referrals-edit.component';
import { ReferralsDetailsComponent } from './views/referrals/referrals-details/referrals-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ApplicationListComponent } from './views/applications/application-list/application-list.component';
import { ApplicationCreateComponent } from './views/applications/application-create/application-create.component';
import { ApplicationUpdateComponent } from './views/applications/application-update/application-update.component';
import { UsersListComponent } from './views/user/users-list/users-list.component';


@NgModule({
  declarations: [
    AffiliatesComponent,
    AffiliatesListComponent,
    ReferralsCodeListComponent,
    ReferralsCreateComponent,
    ReferralsEditComponent,
    ReferralsDetailsComponent,
    ApplicationListComponent,
    ApplicationCreateComponent,
    ApplicationUpdateComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    SharedModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

})
export class AffiliatesModule { }
