import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Notify } from 'notiflix';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';


@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.scss']
})
export class ApplicationCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private referalAppService: ReferalApplicationService) { }

  form!: FormGroup;

  referalapplications!: ReferalApplication;
  ngOnInit(): void {
  
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

  }

  get f(){
    return this.form.controls;
  }


  
  submitForm() {

    console.log(this.form.value);
    this.referalAppService.createReferal(this.form.value)
    .subscribe((res:any) =>{
      console.log('Post created successfully!');
      this.router.navigateByUrl('./application')
    })
  }

}
