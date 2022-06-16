import { Component, OnInit } from '@angular/core';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';
import { Notify } from 'notiflix';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';

@Component({
  selector: 'app-application-referrals-list',
  templateUrl: './application-referrals-list.component.html',
  styleUrls: ['./application-referrals-list.component.scss']
})
export class ApplicationReferralsListComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService) { }

  id!: number;
  referalapps!: ReferalApplication;
    referals: Referal[] = [];

  ngOnInit(): void {

    this.referalapps = new ReferalApplication();
    this.getReferals();
  }
  getReferals()
  {
    this.referalService.getReferalApplicationById(this.id)
    .subscribe({
      next: (data) => {
        this.referalapps = data;
      },
      error: (error) => {
        Notify.failure(error.message);
      }
    })
  }
}
