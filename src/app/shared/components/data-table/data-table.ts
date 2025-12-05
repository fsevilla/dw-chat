import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { DataTableColumn } from '../../types/data-table-column';
import { MaterialModule } from '../../modules/material/material-module';

@Component({
  selector: 'dw-data-table',
  imports: [MaterialModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable implements OnChanges {

  @Input('data') items: any[] = []

  @Input() columns: DataTableColumn[] = []

  displayedColumns: string[] = []

  @Output() onItemSelected: EventEmitter<any> = new EventEmitter()

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('Got new items: ', this.items);
    }

    if (changes['columns']) {
      console.log('Got new columns: ', this.columns);
      this.displayedColumns = this.columns.map(col => col.property);
    }
  }

  onClick(item: any) {
    this.onItemSelected.emit(item);
  }

}
