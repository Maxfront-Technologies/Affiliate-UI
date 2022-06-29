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


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private referalService: ReferalsService,
    private referalAppService: ReferalApplicationService) { }

  form!: FormGroup;
  referal!: Referal;
  referalapplications: ReferalApplication[] = [];
  ngOnInit(): void {
    
    this.getReferalApps();
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      referalApplicationId: new FormControl('', [Validators.required]) 
    });

  }

  get f(){
    return this.form.controls;
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

    console.log(this.form.value);
    this.referalService.createReferal(this.form.value)
    .subscribe((res:any) =>{
      console.log('Post created successfully!');
      this.router.navigateByUrl('./referrals/index')
    })
  }

}
