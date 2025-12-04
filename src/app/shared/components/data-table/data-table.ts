import { Component, Input } from '@angular/core';

@Component({
  selector: 'dw-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {

  @Input() items: any[] = []

}
