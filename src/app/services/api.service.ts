import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T, P>(url: string, payload: P): Observable<T> {
    return this.http.post<T>(url, payload, {});
  }

  put<T, P>(url: string, payload: P): Observable<T> {
    return this.http.put<T>(url, payload);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
