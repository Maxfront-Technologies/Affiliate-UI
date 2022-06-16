import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService) { }
  id!: number;
  referalapps!: ReferalApplication;
   
  referalapplications: ReferalApplication[] = [];

    ngOnInit(): void {
      this.getReferalAppSidebar();
    }
    getReferalAppSidebar()
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
