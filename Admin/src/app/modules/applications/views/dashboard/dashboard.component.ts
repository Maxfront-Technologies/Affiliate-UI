import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private referalService: ReferalApplicationService,private router: Router, private route: ActivatedRoute) { }
  id!: number;
  referalapps!: ReferalApplication;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.referalService.getReferalApplicationById(this.id).subscribe((data: ReferalApplication) =>{
        this.referalapps = data;
      });
    }
  }


