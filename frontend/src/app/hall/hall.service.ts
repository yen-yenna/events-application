import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  private baseUrl = 'http://localhost:8080/api/v1/halls';
  constructor(private http: HttpClient) { }

  getHallById(hallId: number) {
    return this.http.get(this.baseUrl + '/' + hallId);
  }
}
