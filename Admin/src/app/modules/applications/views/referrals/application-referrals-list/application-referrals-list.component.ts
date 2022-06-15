import { Component, OnInit } from '@angular/core';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-application-referrals-list',
  templateUrl: './application-referrals-list.component.html',
  styleUrls: ['./application-referrals-list.component.scss']
})
export class ApplicationReferralsListComponent implements OnInit {

  constructor(private referalService: ReferalsService) { }
    referals: Referal[] = [];
  ngOnInit(): void {
    this.getReferals();
  }
  getReferals()
  {
    this.referalService.getReferals()
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
