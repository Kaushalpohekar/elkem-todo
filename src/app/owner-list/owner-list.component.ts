import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from '../userservice.service';
import { AuthService } from '../auth/auth.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewImageComponent } from '../view-image/view-image.component';
import { AprrovedByOwnerComponent } from '../aprroved-by-owner/aprroved-by-owner.component';
import { RejectApprovalComponent } from '../reject-approval/reject-approval.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['position', 'name', 'Responsibility', 'frequency', 'Month', 'Comments', 'upload'];
  admin_email!: any;

  constructor(private authService: AuthService, public dialog: MatDialog, public service: UserserviceService) {}

  ngOnInit() {
    this.service.isPageLoading(true);
    this.admin_email = this.authService.getUserMail();
    this.getOwnerList();
  }

  getOwnerList() {
    this.service.AllApprovalRequestByOwner(this.admin_email).subscribe(
      (task)=>{
        this.dataSource = new MatTableDataSource(task.Task);
        this.service.isPageLoading(false);
      },
      (error)=>{
        this.showAlert('error', error.error.message);
      }
    );
  }
  Approved(task: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task };
    const dialogRef = this.dialog.open(AprrovedByOwnerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(Success => {
      this.getOwnerList();
    });
  }

  Reject(task: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task };
    const dialogRef = this.dialog.open(RejectApprovalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(Reject => {
      this.getOwnerList();
    });
  }

  viewUpload(task: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {task};
    const dialogRef = this.dialog.open(ViewImageComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(image => {
      this.getOwnerList();
    });
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
