import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material/material-module';


@Component({
  selector: 'dw-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required, [Validators.email]],
      password: ['', Validators.required]
    })
  }

}
