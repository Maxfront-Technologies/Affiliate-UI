import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';

@Component({
  selector: 'app-referrals-details',
  templateUrl: './referrals-details.component.html',
  styleUrls: ['./referrals-details.component.scss']
})
export class ReferralsDetailsComponent implements OnInit {
  

  referal!: Referal;
  referalcode!: string;

  constructor(public referalsService: ReferalsService, 
    private router: Router, private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.referalcode = this.route.snapshot.params['referalCode'];
    this.referalsService.getReferal(this.referalcode).subscribe((data: Referal) =>{
      this.referal = data;
    });
  }
  

}
