import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-applications-layout',
  templateUrl: './applications-layout.component.html',
  styleUrls: ['./applications-layout.component.scss']
})
export class ApplicationsLayoutComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService,
    private router: Router,
    private route: ActivatedRoute) { }
    
  id!: number;
  referalapp!: ReferalApplication;

  ngOnInit(): void {
      this.route.params.subscribe((params) =>{
        const appId = params['id']; 
        this.id = Number.parseInt(appId);
        
        console.log(appId);
        this.referalService.getReferalApplicationById(appId)
        .subscribe((data: ReferalApplication) =>{
          this.referalapp = data;
        });
      })
    }
  
}
