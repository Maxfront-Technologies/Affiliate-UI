import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService,private router: Router, private route: ActivatedRoute) { }
  id!: number;
  referalapps!: ReferalApplication;
   
  referalapplications: ReferalApplication[] = [];

    ngOnInit(): void {
      this.getReferalAppSidebar();

      this.id = this.route.snapshot.params['Id'];
      this.referalService.getReferalApplicationById(this.id).subscribe((data: ReferalApplication) =>{
        this.referalapps = data;
      });
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
  

}
