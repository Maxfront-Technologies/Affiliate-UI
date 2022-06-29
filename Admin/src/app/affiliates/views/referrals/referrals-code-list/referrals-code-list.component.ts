import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';

@Component({
  selector: 'app-referrals-code-list',
  templateUrl: './referrals-code-list.component.html',
  styleUrls: ['./referrals-code-list.component.scss']
})
export class ReferralsCodeListComponent implements OnInit {

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
