import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Fact} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private baseUrl = 'https://localhost:44324/api/fact';
  private corsHeader: HttpHeaders;

  constructor(private http: HttpClient) {
    this.corsHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:44324/',
    })
  }

  getAllFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(`${this.baseUrl}/all`, {headers: this.corsHeader});
  }

  getNewFact(): Observable<Fact> {
    return this.http.get<Fact>(this.baseUrl, {headers: this.corsHeader});
  }
}
