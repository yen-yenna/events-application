/* tslint:disable */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  private baseUrl = 'http://localhost:8080/api/v1/eventType';
  constructor(private http: HttpClient) {}

  getEventTypeList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEventType(eventTypeId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + eventTypeId);
  }

  createEventType(eventType: any) :Observable<any> {
    return this.http.post(this.baseUrl, eventType);
  }

}
