import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseUrl = 'http://localhost:8080/api/v1/admin';

  constructor(private http: HttpClient) {
  }
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '/users' );
  }
  updateUserAdmin(userName: string, value: any): Observable<any> {
    return this.http.put(this.baseUrl + '/users/profile/' + userName, value);
  }

  getAllTickets(): Observable<any> {
    return this.http.get(this.baseUrl + '/tickets');
  }
  deleteUsers(userName: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/user/' + userName);
  }
}
