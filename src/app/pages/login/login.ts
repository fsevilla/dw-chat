import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material/material-module';
import { LoginService } from '../../shared/services/login';
import { AuthService } from '../../shared/services/auth';
import { PagesList } from '../../shared/types/pages-list';


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

  constructor(fb: FormBuilder, private loginService: LoginService, private authService: AuthService, private router: Router) {
    this.form = fb.group({
      email: ['', Validators.required, [Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    const { email, password } = this.form.getRawValue(); 

    this.loginService.login(email, password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        // Take the user to the users page
        this.router.navigate([PagesList.USERS]);
      },
      error: () => {}
    });
  }
  

}
