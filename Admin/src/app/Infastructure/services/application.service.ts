import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService{

  constructor(http: HttpClient) {
    super(http)
  }

  getReferalInApplications(): Observable<Referal[]> {
    return this.http.get<Referal[]>(this.getURI('ReferalApplications/Referal/'))
      .pipe(catchError(this.handleError));
  }
  // getReferalApplicationById(id: number) : Observable<ReferalApplication> {
  //   return this.http.get<ReferalApplication>(this.getURI('ReferalApplications/Referal/' + id))
  //     .pipe(catchError(this.handleError));
  // }

  getReferalApplicationById(id: number): Observable<any> {
    return this.http.get(`${this.getURI('ReferalApplications/Referal')}/${id}`);
  }
}
