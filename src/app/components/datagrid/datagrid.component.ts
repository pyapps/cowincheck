import {AfterViewInit, Component, ViewChild, OnInit, Input, OnChanges} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('columnsList') displayedColumns;
  @Input() data;
  columnsToDisplay: string[] = [];
  dataSource!: MatTableDataSource<Object>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    if(this.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.columnsToDisplay = this.displayedColumns.slice();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.columnsToDisplay = this.displayedColumns.slice();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }  
  }

}