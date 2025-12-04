import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderLink } from '../../shared/types/header-link';
import { MaterialModule } from '../../shared/modules/material/material-module';

@Component({
  selector: 'dw-header',
  imports: [CommonModule, RouterModule, MaterialModule],
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


