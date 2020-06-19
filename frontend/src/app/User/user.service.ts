import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {
  }
  getUser(userName: string) {
    return this.http.get(this.baseUrl + '/' + userName);
  }
  updateUser(userName: string, value: any): Observable<any> {
    return this.http.put( this.baseUrl + '/profile/' + userName, value);
  }
  updatePassword(userName: string, passwordOld: string, passwordNew: string) {
    return this.http.put (this.baseUrl + '/profile/password/' + userName, [passwordOld , passwordNew]);
  }
}
