import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ApplicationService } from 'src/app/Infastructure/services/application.service';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-application-affiliates-list',
  templateUrl: './application-affiliates-list.component.html',
  styleUrls: ['./application-affiliates-list.component.scss']
})
export class ApplicationAffiliatesListComponent implements OnInit {
  constructor(private appService: ApplicationService,private referalService: ReferalApplicationService,private router: Router, private route: ActivatedRoute) { }
  referals: Referal[] = [];
  id!: number;
  referalapps!: ReferalApplication;
  
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.referalService.getReferalApplicationById(this.id).subscribe((data: ReferalApplication) =>{
    this.referalapps = data;
  });


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
