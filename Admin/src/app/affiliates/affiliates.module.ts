import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesComponent } from './affiliates.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';
import { ReferralsCodeListComponent } from './views/referrals/referrals-code-list/referrals-code-list.component';
import { ApplicationsWorkspaceComponent } from './views/applications-workspace/applications-workspace.component';
import { ApplicationsWorkspaceSidebarComponent } from './views/applications-workspace/layouts/applications-workspace-sidebar/applications-workspace-sidebar.component';
import { WorkspaceReferralsComponent } from './views/applications-workspace/referrals/workspace-referrals/workspace-referrals.component';
import { WorkspaceAffliatesComponent } from './views/applications-workspace/affiliates/workspace-affliates/workspace-affliates.component';
import { WorkspaceReportsComponent } from './views/applications-workspace/reports/workspace-reports/workspace-reports.component';
import { MainComponent } from './views/applications-workspace/main/main.component';



@NgModule({
  declarations: [
    AffiliatesComponent,
    AffiliatesListComponent,
    ReferralsCodeListComponent,
    ApplicationsWorkspaceComponent,
    ApplicationsWorkspaceSidebarComponent,
    WorkspaceReferralsComponent,
    WorkspaceAffliatesComponent,
    WorkspaceReportsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    SharedModule
  ],

})
export class AffiliatesModule { }
