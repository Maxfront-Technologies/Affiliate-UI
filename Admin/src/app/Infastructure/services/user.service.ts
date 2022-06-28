import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from 'src/app/domain/entities/user.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(http: HttpClient) {
    super(http)
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getURI('users'))
      .pipe(catchError(this.handleError));
  }
}
