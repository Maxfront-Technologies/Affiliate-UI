import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styles: [
  ]
})
export class BaseComponent {

  constructor(public referalService: ReferalApplicationService,
     public route: ActivatedRoute) { }


    id!: number;
    referalapp!: ReferalApplication;


  getID() {
    this.route.parent?.params.subscribe((params) =>{
      const appId = params['id']; 
      this.id = Number.parseInt(appId);
      
      console.log(appId);
      this.referalService.getReferalApplicationById(appId)
      .subscribe((data: ReferalApplication) =>{
        this.referalapp = data;
      });
    })
    }

    getAppID() {
      this.route.parent?.params.subscribe((params) =>{
        const appId = params['referalApplicationId']; 
        this.id = Number.parseInt(appId);
        
        console.log(appId);
        this.referalService.getReferalApplicationById(appId)
        .subscribe((data: ReferalApplication) =>{
          this.referalapp = data;
        });
      })
      }
  }


