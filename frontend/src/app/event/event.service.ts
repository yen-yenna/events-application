/* tslint:disable */

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseUrl = 'http://localhost:8080/api/v1/events';
  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get(this.baseUrl );
  }
  getEvent(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  createEvent(eevent: object): Observable<object> {
    return this.http.post(this.baseUrl , eevent);
  }
  updateEvent(id: number, value: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, value);
  }
  deleteEvent(id: number): Observable<any>{
    return this.http.delete(this.baseUrl + '/' + id);
  }
  getEventListByType(eventTypeId):Observable<any>{
    return this.http.get(this.baseUrl + '/eventType/' + eventTypeId);
  }
}
