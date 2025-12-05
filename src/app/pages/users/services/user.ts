import { Injectable } from '@angular/core';
import { User as IUser } from '../types/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Crud } from '../../../shared/services/crud';

@Injectable({
  providedIn: 'root',
})
export class User extends Crud {

  protected override endpoint: string = 'users';

  getAllUsers(): Observable<IUser[]> {
    return super.getAll<IUser>();
  }

  // getAll(): Observable<IUser[]> {
  //   const url = `${environment.apiUrl}projects`;
  //   return this.http.get<IUser[]>(url)
  // }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(id);
  }

  // update(user: IUser) {}

  // deleteById(id: string) {}

  // create(user: IUser) {}
  
}


