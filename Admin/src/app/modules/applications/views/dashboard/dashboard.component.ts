import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {

  constructor( referalService: ReferalApplicationService,route: ActivatedRoute) {
    super(referalService, route);
  }


  ngOnInit(): void {
      this.getID();
    }
  }
  


