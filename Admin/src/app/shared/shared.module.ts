import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './presentation/layouts/main-layout/main-layout.component';
import { UnauthLayoutComponent } from './presentation/layouts/unauth-layout/unauth-layout.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './presentation/components/topbar/topbar.component';
import { SidebarComponent } from './presentation/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    UnauthLayoutComponent,
    TopbarComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent,
    UnauthLayoutComponent,
    RouterModule
  ]
})
export class SharedModule { }
