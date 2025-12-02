import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'dw-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = 'John Doe'
  email = 'john@doe.com'
  phone = ''
  subject = ''
  message = ''

  onSubmit() {
    console.log('You will submit the data')
  }

  onKeyup(e: KeyboardEvent) {
    console.log('The name is: ', (e.target as HTMLInputElement).value)
  }
}
