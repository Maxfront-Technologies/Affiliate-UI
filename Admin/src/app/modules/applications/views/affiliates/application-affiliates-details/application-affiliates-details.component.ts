import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ApplicationService } from 'src/app/Infastructure/services/application.service';

@Component({
  selector: 'app-application-affiliates-details',
  templateUrl: './application-affiliates-details.component.html',
  styleUrls: ['./application-affiliates-details.component.scss']
})
export class ApplicationAffiliatesDetailsComponent implements OnInit {

  constructor(private appService: ApplicationService) { }
    referals: Referal[] = [];
    
  ngOnInit(): void {
    this.getReferals();
  }
  getReferals()
  {
    this.appService.getReferalApplications()
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
