import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
//
import { NotificationService } from '../../shared/notification.service';
import { StoreService } from '../../shared/store.service';
import { StoreComponent } from '../store/store.component';
//
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})


export class StoreListComponent implements OnInit {

  constructor(
    private service: StoreService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'address', 'contactpersons', 'telephone', 'comment', 'actions'];
  //displayedColumns: string[] = ['name', 'address', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this.service.getStores().subscribe(
      list => {
        let array = list.map(item => {
          // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.key,
            // departmentName,
            ...item.payload.val()
          }
        })

        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };


      });

  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StoreComponent, dialogConfig);
  }
  onCreate() {
    this.service.initializeFormGroup();
    this.openDialog();
  }
  onEdit(row) {
    this.service.populateForm(row);
    this.openDialog();
  }

  onDelete($key) {
    if (confirm('Ви дійсно хочете вилучити запис ?')) {
      this.service.delete($key);
      this.notificationService.warn('! Deleted successfully');
    }
  }
}
