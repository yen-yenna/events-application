import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private baseUrl = 'http://localhost:8080/api/v1/localizations';

  constructor(private http: HttpClient) {
  }
  getAllLocalizations(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getLocalizationById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
