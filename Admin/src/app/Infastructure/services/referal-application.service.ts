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
    return this.http.get<ReferalApplication>(this.getURI('ReferalApplications/Referal/' + id))
      .pipe(retry(1), catchError(this.handleError));
  }
}
