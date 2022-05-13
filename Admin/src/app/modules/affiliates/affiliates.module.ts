import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesComponent } from './affiliates.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';


@NgModule({
  declarations: [
    AffiliatesComponent,
    AffiliatesListComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    SharedModule
  ]
})
export class AffiliatesModule { }
