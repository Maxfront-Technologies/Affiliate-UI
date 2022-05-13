import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/shared/presentation/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'affiliates',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/affiliates/affiliates.module').then(m => m.AffiliatesModule)
  },
  {
    path: 'applications/:name',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
