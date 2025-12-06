import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root',
})
export abstract class Crud {

  protected endpoint: string = '';

  constructor(protected http: HttpClient, private authService: AuthService) {}

  // getAll(): Observable<any[]> {
  //   const url = `${environment.apiUrl}${this.endpoint}`;
  //   return this.http.get<any[]>(url)
  // }

  getAll<T>(): Observable<T[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'authorization': token
    })

    const url = `${environment.apiUrl}${this.endpoint}`;
    return this.http.get<T[]>(url,  { headers })
  }

  getById<T>(id: string): Observable<T> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'authorization': token
    })
    const url = `${environment.apiUrl}${this.endpoint}/${id}`;
    return this.http.get<T>(url, { headers });
  }

  update(item: any) {}

  deleteById(id: string) {}

  create(item: any) {}
  
}
