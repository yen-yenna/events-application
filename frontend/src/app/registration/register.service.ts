import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../User/User';
import {Login} from '../login/Login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {
  }

  register(user: User) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(user);
    return this.http.post<User>(this.baseUrl + '/register', user, {headers});
  }
  login(loginRequest: Login) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(loginRequest);
    return this.http.post<Login>(this.baseUrl + '/login', loginRequest, {headers});
  }
}
