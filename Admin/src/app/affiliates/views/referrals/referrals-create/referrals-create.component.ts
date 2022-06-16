import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';

@Component({
  selector: 'app-referrals-create',
  templateUrl: './referrals-create.component.html',
  styleUrls: ['./referrals-create.component.scss']
})
export class ReferralsCreateComponent implements OnInit {
 singlereferals: Referal[] = [];

 createreferal: Referal = {
   email: '',
   referalApplicationId: 0,
   id: 0,
   referalCode: '',
   application: new ReferalApplication
 }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private referalService: ReferalsService,
    private referalAppService: ReferalApplicationService) { }

  form!: FormGroup;
  referal!: Referal;
  referalapplications: ReferalApplication[] = [];
  ngOnInit(): void {
    
    this.getReferalApps();
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      referalApplicationId: ['', Validators.required]
    });

  }
  getReferalApps()
  {
    this.referalAppService.getReferalApplications()
    .subscribe({
      next: (data) => {
        this.referalapplications = data;
      },
      error: (error) => {
        Notify.failure(error.message);
      }
    })
  }
  submitForm() {
    // if (this.form.valid) {
    //   this.referalService.createReferal(this.referal)
    //     .subscribe({
    //       next: () => {
    //         this.router.navigate(['referrals/']);
    //         console.log('created')
    //         Notify.success('Referal created successfully');
    //       },
    //       error: (err) => {
    //         console.log({err});
    //       }
    //     })
    // }
    console.log(this.createreferal);
  }

}
