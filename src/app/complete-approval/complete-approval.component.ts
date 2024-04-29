import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';

@Component({
  selector: 'app-complete-approval',
  templateUrl: './complete-approval.component.html',
  styleUrls: ['./complete-approval.component.css']
})
export class CompleteApprovalComponent {
  task: any;
  month: any;
  file: File | null = null;
  constructor(
    public service: UserserviceService,
    public dialogRef: MatDialogRef<CompleteApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.task = data.task;
    this.month = data.month;
  }

  remark = new FormControl('', [Validators.required]);

  getRemarkErrorMessage() {
    if (this.remark.hasError('required')) {
      return 'Remark is Required';
    }
    return '';
  }

  onFileSelected(event: any) {
    const files: FileList = event?.target?.files;

    if (files) {
      this.file = files.item(0);
    }
  }

  async submitApproval() {
    if (this.remark.valid) {
      const base64String = this.file ? await this.convertFileToBase64(this.file) : '';

      const data = {
        Task: this.task.name,
        Frequency: this.task.frequency,
        Month: this.month,
        Responsibility: this.task.Responsibility,
        Email: this.task.Email,
        Mob: this.task.Mob,
        admin_email: this.task.admin_email,
        remark: this.remark.value,
        upload: base64String,
      }

      this.service.approvalRequest(data).subscribe(
        (data)=> {
          this.dialogRef.close();
          this.showAlert('success', data.message);
        },
        (error)=>{
          this.showAlert('error', error.error.message);
      });
    } else {
      this.remark.markAsTouched();
    }
  }

  closeAlert() {
    this.dialogRef.close();
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      // Callback when the file reading is successful
      reader.onload = () => {
        resolve(reader.result as string);
      };

      // Callback when there is an error in reading the file
      reader.onerror = (error) => {
        reject(error);
      };
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
