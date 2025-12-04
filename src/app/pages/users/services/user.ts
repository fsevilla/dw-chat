import { Injectable } from '@angular/core';
import { User as IUser } from '../types/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) {}

  getAll(): Observable<IUser[]> {
    const url = `${environment.apiUrl}users`;
    return this.http.get<IUser[]>(url)
  }

  getById(id: string): Observable<IUser> {
    const url = `${environment.apiUrl}users/${id}`;
    return this.http.get<IUser>(url);
  }

  update(user: IUser) {}

  deleteById(id: string) {}

  create(user: IUser) {}
  
}

