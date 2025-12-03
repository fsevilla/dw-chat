import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'dw-signup',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  /**
   * name
   * displayname
   * email
   * password
   * confirm password
   * terms
   */

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      displayName: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      terms: ['', [Validators.requiredTrue]]
    }, { validators: [() => this.passwordMatchValidator() ] })
    // }, { validators: [this.passwordMatchValidator.bind(this)] })
  }

  // toggleTerms() {
  //   const { terms } = this.form.getRawValue();
  //   this.form.patchValue({ terms: !terms })
  // }

    passwordMatchValidator(): ValidationErrors | null {
      if (!this.form) return null;
      const { password, confirm } = this.form.getRawValue();
      return password === confirm ? null : { mismatch: true };
    }

}

