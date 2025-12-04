import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldAppearance } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'dw-signup',
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  fieldAppearance: MatFormFieldAppearance = 'fill';

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
      terms: [true, [Validators.requiredTrue]]
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

    getNameErrorMessage() {
      if (!this.form.controls['name'].errors) return '';

      if (this.form.controls['name'].errors['required']) {
        return 'This field is required';
      } else {
        return 'It must contain at least 3 letter';
      }
    }

}

