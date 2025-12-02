import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLink } from '../../shared/types/header-link';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dw-header',
  imports: [CommonModule, RouterModule],
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


