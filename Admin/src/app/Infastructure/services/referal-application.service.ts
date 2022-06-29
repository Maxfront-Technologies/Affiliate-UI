import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ReferalApplication } from 'src/app/domain/entities/referal-application.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReferalApplicationService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  getReferalApplications(): Observable<ReferalApplication[]> {
    return this.http.get<ReferalApplication[]>(this.getURI('ReferalApplications'))
      .pipe(retry(1), catchError(this.handleError));
  }

  getReferalApplicationById(id: number) : Observable<ReferalApplication> {
    return this.http.get<ReferalApplication>(this.getURI('ReferalApplications/' + id))
      .pipe(retry(1), catchError(this.handleError));
  }
  createReferal(referalApplication: ReferalApplication) {
    return this.http.post(this.getURI('ReferalApplications'), referalApplication)
      .pipe(retry(1), catchError(this.handleError));
  }

  update(id: number, referal: ReferalApplication): Observable<any> {
    return this.http.put(`${this.getURI('ReferalApplications')}/${id}`, referal);
  }
  // updateReferal(id: number, referalApplication: ReferalApplication): Observable<ReferalApplication> {
  //   return this.http.put<ReferalApplication>(this.getURI('ReferalApplications/') + id, JSON.stringify(referalApplication), this.httpOptions)
  //   .pipe(retry(1), 
  //     catchError(this.handleError)
  //   )
  // }



}
