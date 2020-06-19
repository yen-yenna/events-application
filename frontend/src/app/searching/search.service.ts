import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://localhost:8080/api/v1/search';

  constructor(private http: HttpClient) {}

  getEventsContaining(word: any): Observable<any> {
    return this.http.get(this.baseUrl + '/' + word);
  }
}
