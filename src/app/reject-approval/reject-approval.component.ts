import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';

@Component({
  selector: 'app-reject-approval',
  templateUrl: './reject-approval.component.html',
  styleUrls: ['./reject-approval.component.css']
})
export class RejectApprovalComponent {
  task: any;

  constructor(
    public service: UserserviceService,
    public dialogRef: MatDialogRef<RejectApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.task = data.task;
  }

  remark = new FormControl('', [Validators.required]);

  getRemarkErrorMessage() {
    if (this.remark.hasError('required')) {
      return 'Remark is Required';
    }
    return '';
  }

  closeAlert(){
    this.dialogRef.close();
    this.showAlert('error', 'The Reject Request has been Cancel!');
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

  submitApproval() {
    if(this.remark.valid){
        const data = {
        task: this.task.task,
        month: this.task.Month,
        remark: this.remark.value
      }
      this.service.markAsUnApproved(data).subscribe(
        (update)=>{
          this.showAlert('success', update.message);
          this.dialogRef.close();
        },
        (error)=>{
          this.showAlert('error', error.error.message);
        },
      );
    }
    
  }
}
