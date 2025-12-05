import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class Crud {

  protected endpoint: string = '';

  constructor(protected http: HttpClient) {}

  // getAll(): Observable<any[]> {
  //   const url = `${environment.apiUrl}${this.endpoint}`;
  //   return this.http.get<any[]>(url)
  // }

  getAll<T>(): Observable<T[]> {
    const url = `${environment.apiUrl}${this.endpoint}`;
    return this.http.get<T[]>(url)
  }

  getById<T>(id: string): Observable<T> {
    const url = `${environment.apiUrl}${this.endpoint}/${id}`;
    return this.http.get<T>(url);
  }

  update(item: any) {}

  deleteById(id: string) {}

  create(item: any) {}
  
}
