import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ApplicationService } from 'src/app/Infastructure/services/application.service';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-application-affiliates-list',
  templateUrl: './application-affiliates-list.component.html',
  styleUrls: ['./application-affiliates-list.component.scss']
})
export class ApplicationAffiliatesListComponent extends BaseComponent {

  constructor( referalService: ReferalApplicationService,
    route: ActivatedRoute,
     private appService: ApplicationService) {
    super(referalService, route);
  }

  referals: Referal[] = [];

    ngOnInit(): void {
      this.getAppID();
      this.getReferals();
    }
    getReferals()
    {
      this.appService.getReferalInApplications()
      .subscribe({
        next: (data) => {
          this.referals = data;
        },
        error: (error) => {
          Notify.failure(error.message);
        }
      })
    }

}
