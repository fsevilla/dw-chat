import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { 
  FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ContactData } from '../../shared/types/contact-data';
import { Contact as ContactService } from '../../shared/services/contact';

@Component({
  selector: 'dw-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  form: FormGroup;
  isLoading: boolean = false;
  isSent: boolean = false;

  constructor(fb: FormBuilder, private contactService: ContactService, private cdr: ChangeDetectorRef) {
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
      if (this.isLoading) return;

      const data: ContactData = this.form.getRawValue();
      console.log('You will submit the data?', data, this.form);
      this.isLoading = true;
      this.contactService.sendMessage(data).then(() => {
        this.isLoading = false;
        this.isSent = true;
        console.log('Received a response');
        this.cdr.detectChanges();
      });
    } else {
      console.log('You are missing data...', this.form)
    }
  }

  onCancel(e: MouseEvent) {
    
  }


}
