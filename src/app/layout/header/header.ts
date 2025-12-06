import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderLink } from '../../shared/types/header-link';
import { MaterialModule } from '../../shared/modules/material/material-module';
import { AuthService } from '../../shared/services/auth';
import { PagesList } from '../../shared/types/pages-list';

@Component({
  selector: 'dw-header',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isLoggedIn = signal(false);
  loginPage = PagesList.LOGIN;

  links: HeaderLink[] = [
    { label: 'Home', href: '' },
    { label: 'About us', href: PagesList.ABOUT },
    { label: 'Contact us', href: PagesList.CONTACT },
  ]

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe((status) => {
      this.isLoggedIn.set(status);
    });
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate([this.loginPage]);
  }

}


