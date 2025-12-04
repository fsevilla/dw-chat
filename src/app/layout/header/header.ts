import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderLink } from '../../shared/types/header-link';

@Component({
  selector: 'dw-header',
  imports: [CommonModule, RouterModule, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

    links: HeaderLink[] = [
      { label: 'Home', href: '' },
      { label: 'About us', href: 'about' },
      { label: 'Contact us', href: 'contact' },
    ]

}


