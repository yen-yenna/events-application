/* tslint:disable */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8080/api/v1/tickets';
  constructor(private http: HttpClient) { }

  createTicket(ticket: object): Observable<object> {
    return this.http.post(this.baseUrl, ticket);
  }
  getTicketListByUser(userName: string): Observable<any> {
    return this.http.get(this.baseUrl + '/user/' + userName);
  }
    isSeatOccupied(eventId: number, seatInARow: string) : Observable<any>{
    return this.http.get(this.baseUrl + '/' + eventId  + '/' + seatInARow);
  }
  getSeatsByEventId(eventId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + eventId);
  }
  getTicketById (ticketId: number) :Observable<any> {
    return this.http.get(this.baseUrl + '/ticket/' + ticketId);
  }
  getReserved (eventId: number) : any {
    return this.http.get (this.baseUrl + '/reserved/' + eventId);
  }


}
