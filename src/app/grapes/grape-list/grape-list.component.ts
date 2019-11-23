import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
//
import { NotificationService } from '../../shared/notification.service';
import { GrapeService } from '../../shared/grape.service';
import { GrapeComponent } from '../grape/grape.component';
//
import { HttpClient } from '@angular/common/http';

// import * as fs from 'fs';
// import * as readline from 'readline';

@Component({
  selector: 'app-grape-list',
  templateUrl: './grape-list.component.html',
  styleUrls: ['./grape-list.component.scss']
})
export class GrapeListComponent implements OnInit {

  constructor(
    private service: GrapeService,
    // private departmentService: DepartmentService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'selection', 'daysreach', 'weighbunch', 'weighberry', 'colorberry', 'taste', 'actions'];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {

    this.service.getGrapes().subscribe(
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
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase()
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    // dialogConfig.height = "100%";
    this.dialog.open(GrapeComponent, dialogConfig);
  }
  onLoadFile() {
    var service = this.service
    this.http.get('assets/list.txt', { responseType: 'text' })
      .subscribe(
        data => {
          console.log(data)
          let ar = data.split('\n')
          // let line_no = 0;
          let nLine = 1;
          let arrE = [];
          let arrI = [];
          let nIndex = 0;
          // let inNomer;
          ar.forEach(function (line, index) {
            //   line_no++;
            let inNomer = line.indexOf(nLine + '.')
            if (inNomer > -1) {
              //     // console.log('nLine', nLine, line)
              if (nLine > 1) {
                var arrCopy = arrI.slice();
                arrE.push(arrCopy)
              }
              arrI.forEach(function (item, index) {
                arrI[index] = '';
              });
              nLine++
              nIndex = 0
            }
            //   // console.log('nLine:', nLine, 'nIndex', nIndex)
            if (nLine > 1) {
              if (arrI.length - 1 < nIndex) {
                arrI.push(line)
              } else {
                arrI[nIndex] = line
              }
              nIndex++
            }

          });
          // console.log(ar)
          console.log(arrE)
          arrE.forEach(function (arr, index) {
            if (index > 52) {
              let a6 = arr[6].split('/')
              if (a6.length > 1) {
                console.log('a6', a6)
                let grape = {
                  name: arr[1],
                  image: '.',
                  selection: arr[2],
                  daysreach: arr[3],
                  weighbunch: a6[1],
                  weighberry: a6[0],
                  colorberry: arr[4],
                  formberry: arr[5],
                  frost: arr[8],
                  taste: arr[7],
                  urls: '.',
                  comment: '.'
                }
                service.insertGrape(grape);
              }
            }
          })
        }
      );
    // const readline = require('readline');
    // const fs = require('fs');
    // let rl = readline.createInterface({
    //   input: fs.createReadStream('list.txt')
    // });
    // let line_no = 0;
    // let nLine = 1;
    // let arrE = [];
    // let arrI = [];
    // let nIndex = 0;
    // let inNomer;

    // // event is emitted after each line
    // rl.on('line', function (line) {
    //   line_no++;
    //   inNomer = line.indexOf(nLine + '.')
    //   if (inNomer > -1) {
    //     // console.log('nLine', nLine, line)
    //     if (nLine > 1) {
    //       var arrCopy = arrI.slice();
    //       arrE.push(arrCopy)
    //     }
    //     arrI.forEach(function (item, index) {
    //       arrI[index] = '';
    //     });
    //     nLine++
    //     nIndex = 0
    //   }
    //   // console.log('nLine:', nLine, 'nIndex', nIndex)
    //   if (nLine > 1) {
    //     if (arrI.length - 1 < nIndex) {
    //       arrI.push(line)
    //     } else {
    //       arrI[nIndex] = line
    //     }
    //     nIndex++
    //   }
    // });

    // // end
    // rl.on('close', function (line) {
    //   // console.log('lines : ' + nLine);
    //   // console.log(arrE);
    //   //console.log(arrI);
    //   // arrE.forEach(function (item, index) {
    //   //     console.log(index, item)
    //   // });
    //   console.log('arrE', arrE[0])
    //   let a6 = arrE[0].split('/')
    //   let grape = {
    //     name: arrE[0][1],
    //     image: '.',
    //     selection: arrE[0][2],
    //     daysreach: arrE[0][3],
    //     weighbunch: a6[1],
    //     weighberry: a6[0],
    //     colorberry: arrE[0][4],
    //     formberry: arrE[0][5],
    //     frost: arrE[0][8],
    //     taste: arrE[0][7],
    //     urls: '.',
    //     comment: '.'
    //   }

    //   this.service.insertGrape(grape);



    // });


  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(GrapeComponent, dialogConfig);
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteGrape($key);
      this.notificationService.warn('! Deleted successfully');
    }
  }
  onShopping(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(GrapeComponent, dialogConfig);
  }

}
