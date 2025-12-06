import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());


  // Store the token  === login
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.authStatus.next(true);
  }

  // Retrieve this token  === isLoggedIn
  getToken(): string {
    return localStorage.getItem('authToken') || '';
  } 

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  removeToken() {
    localStorage.removeItem('authToken');
    this.authStatus.next(false);
  }

  // Remove the token === logout
}
