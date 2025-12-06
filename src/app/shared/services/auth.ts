import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  // Store the token  === login
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Retrieve this token  === isLoggedIn
  getToken(): string | null {
    return localStorage.getItem('authToken');
  } 

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  removeToken() {
    localStorage.removeItem('authToken');
  }

  // Remove the token === logout
}
