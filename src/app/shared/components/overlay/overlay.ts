import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dw-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss',
})
export class Overlay {

  @Input() loading: boolean = false;

}
