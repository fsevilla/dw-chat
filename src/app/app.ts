import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from "./layout/footer/footer";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('dw-chat');
  name = signal('Francisco');

  constructor(cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.name.set('John')
      // cdr.detectChanges();
    }, 2000)
  }
}


