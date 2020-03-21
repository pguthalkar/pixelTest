import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ AppConstants } from '../config/app.constant';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _apiURL : string;
  constructor(private http: HttpClient) {
    this._apiURL = AppConstants.apiURL;
  }



  public getHttpResult(url,params): Observable<any>
  {
    return this.http.get<any>(this._apiURL+url,params);
  }
}
