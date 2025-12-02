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
      phone: '1234', // numeric
      subject: 'suggestion', // required
      message: 'lorem ipsum' // required
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
