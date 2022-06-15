import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReferalsService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  getReferals(): Observable<Referal[]> {
    return this.http.get<Referal[]>(this.getURI('Referals'))
      .pipe(retry(1), catchError(this.handleError));
  }
  
  //GetById
  getCountry(referalCode: string) : Observable<Referal> {
    return this.http.get<Referal>(this.getURI('Referals/' + referalCode))
      .pipe(retry(1), catchError(this.handleError));
  }
  
  //Create
  createReferal(referal: Referal) {
    return this.http.post(this.getURI('Referals'), referal)
      .pipe(retry(1), catchError(this.handleError));
  }

  //Update
  updateReferal(id: number, referal: Referal) {
    return this.http.put(this.getURI('Referals/' + id), referal)
      .pipe(retry(1), catchError(this.handleError));
  }
}
