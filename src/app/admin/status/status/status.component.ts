import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { StatusService } from 'src/app/_services/status.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box/dialog-box.component';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  label: string;
  displayedColumns = ['label', 'description', 'actions'];
  dataSource: any;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private toastr: ToastrService,public dialog: MatDialog, private statusService: StatusService) {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.statusService.getAllStatuses().subscribe(
      data => {
        this.dataSource = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
  openDialog(action, obj) {
    obj.action = action;
    if(action!="Add"){
      this.statusService.getStatusCount(obj.id).subscribe(
        data => {
          obj.count=data;
          const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '350px',
            data: obj
          });
          dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Update') {
              this.updateRowData(result.data);
            } else if (result.event == 'Delete') {
              this.deleteRowData(result.data);
            }
          });
        },
        err => {
          console.log(err.error.message);
          this.toastr.error(
            ``,
            'An error occured,please try again',
            {
              timeOut: 3000,
              positionClass: 'toast-bottom-left'
            }
          );
        }
      );
    }
    else{
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '350px',
        data: obj
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result.event == 'Add') {
          this.addRowData(result.data);
        }
      });
    }
  }
  addRowData(row_obj) {
    this.statusService.addStatus(
      {
        label: row_obj.label,
        description: row_obj.description
      }
    ).subscribe(
      data => {
        this.toastr.success(
          ``,
          'Status added successfuly',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
        this.dataSource.push({
          id: data.id,
          label: data.label,
          description: data.description
        });
        this.table.renderRows();
      },
      err => {
        this.toastr.error(
          ``,
          'An error occured, try again',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
        console.log(err.error.message);
      }
    );
  }
  updateRowData(row_obj) {
    this.statusService.updateStatus(
      row_obj.id,
      {
        label: row_obj.label,
        description: row_obj.description
      }
    ).subscribe(
      data => {
        this.toastr.success(
          ``,
          'Status updated successfuly',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
        this.dataSource = this.dataSource.filter((value, key) => {
          if (value.id == data.id) {
            value.label = data.label;
            value.description = data.description;
          }
          return true;
        });
      },
      err => {
        console.log(err.error.message);
        this.toastr.error(
          ``,
          'An error occured, try again',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
      }
    );
  }

  deleteRowData(row_obj) {
    this.statusService.deleteStatus(row_obj.id).subscribe(
      data => {
        this.toastr.success(
          ``,
          'Status deleted successfuly',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
        this.dataSource = this.dataSource.filter((value, key) => {
          return value.id != row_obj.id;
        });
      },
      err => {
        console.log(err.error.message);
        this.toastr.error(
          ``,
          'An error occured, try again',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        );
      }
    );
  }
}