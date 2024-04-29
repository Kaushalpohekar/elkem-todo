import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from '../userservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SucessDailogComponent } from '../sucess-dailog/sucess-dailog.component';
import { ApprovalRequestSubTaskComponent } from '../approval-request-sub-task/approval-request-sub-task.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-time-by-user',
  templateUrl: './time-by-user.component.html',
  styleUrls: ['./time-by-user.component.css']
})
export class TimeByUserComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = [
    'position',
    'name',
    'Responsibility',
    'frequency',
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
    'Comments'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  MainTask!: any[];
  Email!: any;

  constructor(private authService: AuthService, public dialog: MatDialog,public service: UserserviceService) {}

  ngOnInit() {
    this.service.isPageLoading(true);
    this.Email = this.authService.getUserMail();
    this.getMainTask();
  }

  complete(task: any, month: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task, month };
    const dialogRef = this.dialog.open(ApprovalRequestSubTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(sucess => {
      this.getMainTask();
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

  getMainTask() {
    if(this.Email){
      this.service.AllMainTaskByUser(this.Email).subscribe(
      (mainTask) => {
        this.MainTask = mainTask.Task;
        this.getSubTask();
      },
      (error) => {
        this.showAlert('error', error.error.message);
      }
    );
    }
  }

  getSubTask() {
    if (this.MainTask && this.MainTask.length > 0) {
      if (this.Email) {
        this.service.AllSubTaskByUser(this.Email).subscribe(
          (subTask) => {
            const SubTask = subTask.Task;
            this.MainTask.forEach((task) => {
              task.subTasks = SubTask.filter((sub: any) => sub.Task_id === task.Task_id);
            });
            this.dataSource = new MatTableDataSource<PeriodicElement>(this.MainTask);
            this.service.isPageLoading(false);
          },
          (error) => {
            this.showAlert('error', error.error.message);
          }
        ); 
      }
    }
  }


  getSerial(index: number): string {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return alphabet[index % alphabet.length];
  }
}

export interface PeriodicElement {
  Sr_No: any;
  Schedule_Equipment: any;
  Responsibility: any;
  Frequency: any;
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
}
