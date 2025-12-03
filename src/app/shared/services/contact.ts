import { Injectable } from '@angular/core';
import { ContactData } from '../types/contact-data';

@Injectable({
  providedIn: 'root',
})
export class Contact {

  sendMessage(data: ContactData): Promise<{ message: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: 'ok' });
      }, 1000);
    })
  }
  
}
