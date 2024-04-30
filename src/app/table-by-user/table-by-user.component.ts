import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SucessDailogComponent } from '../sucess-dailog/sucess-dailog.component';
import { CompleteApprovalComponent } from '../complete-approval/complete-approval.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { AuthService } from '../auth/auth.service'

export interface PeriodicElement {
  Sr_No: any;
  Schedule_Equipment: any;
  Responsibility: any;
  Frequency: any;
  Owner: any;
  Jan: any;
  Feb: any;
  Mar: any;
  Apr: any;
  May: any;
  Jun: any;
  Jul: any;
  Aug: any;
  Sep: any;
  Oct: any;
  Nov: any;
  Dec: any;
  Comments: any;
  Email: any;
  mob: any;
  admin_email : any;
}

@Component({
  selector: 'app-table-by-user',
  templateUrl: './table-by-user.component.html',
  styleUrls: ['./table-by-user.component.css']
})
export class TableByUserComponent implements OnInit {

  Email!: any;

  constructor(private authService: AuthService, public dialog: MatDialog,public service: UserserviceService) {}

  totalTasks: number = 0;
  overdueTasks: number = 0;
  inProgressTasks: number = 0;
  completedTasks: number = 0;

  @ViewChild('myTable') myTable!: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['position', 'name', 'Responsibility','frequency', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'Comments'];

  dataSource = new MatTableDataSource<PeriodicElement>(); // Define MatTableDataSource

  

  ngOnInit(): void {
    this.service.isPageLoading(true);
    this.Email = this.authService.getUserMail();
    this.getuserdata();
  }

  getuserdata() {
    if(this.Email){
      this.service.AllScheduleByUser(this.Email).subscribe(
        (data: any) => {
          let counter = 1;
          this.dataSource.data = data.Task.map((item: any, index: number) => ({
            position: counter++,
            name: item.Schedule_Equipment,
            Owner: item.admin_name || '',
            frequency: item.Frequency,
            Responsibility: item.Responsibility,
            january: item.Jan,
            february: item.Feb,
            march: item.Mar,
            april: item.Apr,
            may: item.May,
            june: item.Jun,
            july: item.Jul,
            august: item.Aug,
            september: item.Sep,
            october: item.Oct,
            november: item.Nov,
            december: item.December,
            Comments: item.Comments,
            Email : item.Email,
            Mob : item.Mob,
            admin_email : item.admin_email,
          }));
          this.getalltask();
        },
        (error: any) => {
          this.showAlert('error', error.error.message);
        }
      );
    }
    
  }

  getalltask() {
    if(this.Email){
      this.service.countTasksByUser(this.Email).subscribe(
        (data: any) => {
          this.totalTasks = data.totalTasks;
          this.overdueTasks = data.overdueTasks;
          this.inProgressTasks = data.inProgressTasks;
          this.completedTasks = data.completedTasks;
          this.service.isPageLoading(false);
        },
        (error: any) => {
          this.showAlert('error', error.error.message);
        }
      ); 
    } 
  }


  complete(task: any, month: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task, month };
    const dialogRef = this.dialog.open(CompleteApprovalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(sucess => {
      this.getuserdata();
      this.getalltask();
    });
  }


  completedSucess(task: any, month: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task, month };
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(SucessDailogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }

  showAlert(type: string, message: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { type, message };
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AlertMsgComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }
}
