import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatesComponent } from './affiliates.component';
import { AffiliatesListComponent } from './views/affiliates-list/affiliates-list.component';

const routes: Routes = [
  {
    path: '',
    component: AffiliatesComponent,
    children: [
      { path: '', component: AffiliatesListComponent },
      { path: 'create', component: AffiliatesListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
