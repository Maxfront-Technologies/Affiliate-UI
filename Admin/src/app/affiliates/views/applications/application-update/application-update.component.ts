import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { ReferalApplicationService } from 'src/app/Infastructure/services/referal-application.service';

@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.scss']
})
export class ApplicationUpdateComponent implements OnInit {

  id!: number;
  referal!: ReferalApplication;
  form!: FormGroup;

  constructor(public referalService: ReferalApplicationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.referalService.update(this.id,this.referal).subscribe((data:ReferalApplication
      ) =>{
      this.referal = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit()
  {
    console.log(this.form.value);
    this.referalService.update(this.id, this.form.value)
    .subscribe((res:any) => {
      console.log('Referal Updated Successfully!');
      this.router.navigateByUrl('affiliates/applications');
    })
  }

}
