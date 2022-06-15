import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Errormodel } from '../../domain/models/errormodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseURL = 'https://api.cool-brahmagupta.70-38-105-12.plesk.page/api/';
  //public baseURL = 'https://localhost:44305/api/';
  constructor(public http: HttpClient) {
  }

  getURI(relativePath: string): string {
    return this.baseURL + relativePath;
  }

  public handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error[0];
    }
    //window.alert(errorMessage);
    console.log(error);

    return throwError(() => {
      let errorModel: Errormodel = {
        message: errorMessage,
        statusCode: error.statusCode
      };
      return errorModel;
    });
  }
}
