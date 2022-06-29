import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService) { }
  referalapplications: ReferalApplication[] = [];
    ngOnInit(): void {
      this.getReferalApps();
    }
    getReferalApps()
    {
      this.referalService.getReferalApplications()
      .subscribe({
        next: (data) => {
          this.referalapplications = data;
        },
        error: (error) => {
          Notify.failure(error.message);
        }
      })
    }
}
