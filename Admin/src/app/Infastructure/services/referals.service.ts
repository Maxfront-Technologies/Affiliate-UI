import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, retry } from 'rxjs';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReferalsService extends BaseService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(http: HttpClient) {
    super(http)
  }

  getReferals(): Observable<Referal[]> {
    return this.http.get<Referal[]>(this.getURI('Referals'))
      .pipe(retry(1), catchError(this.handleError));
  }
  
  //GetById
  // getReferal(referalCode: string) : Observable<Referal> {
  //   return this.http.get<Referal>(`${this.getURI('Referals')}/ ${referalCode}`)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  getReferal(referalCode: string): Observable<Referal> {
    return this.http.get<Referal>(this.getURI('Referals/') + referalCode)
    .pipe(
      catchError(this.handleError)
    )
  }

  //Create
  createReferal(referal: Referal) {
    return this.http.post(this.getURI('Referals'), referal)
      .pipe(retry(1), catchError(this.handleError));
  }

  //Update
  // updateReferal(referalCode: string, referal: Referal) {
  //   return this.http.put<Referal>(`${this.getURI('Referals')}/ ${referalCode}`,referal)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  updateReferal(id: number, referal: Referal): Observable<Referal> {
    return this.http.put<Referal>(this.getURI('Referals') + id, JSON.stringify(referal), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }
    
}
