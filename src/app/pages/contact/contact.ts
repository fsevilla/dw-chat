import { Component } from '@angular/core';
import { 
  FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'dw-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // required, minlength
      email: ['', [Validators.required, Validators.email]],  // required, email
      phone: ['', [Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)]], // phone format
      subject: ['suggestion', Validators.required], // required
      message: ['lorem ipsum', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]] // required
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      console.log('You will submit the data?', data, this.form);
    } else {
      console.log('You are missing data...', this.form)
    }
  }

  onCancel(e: MouseEvent) {
    e.preventDefault();
  }


}
