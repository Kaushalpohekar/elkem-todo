import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-complete-approval',
  templateUrl: './complete-approval.component.html',
  styleUrls: ['./complete-approval.component.css']
})
export class CompleteApprovalComponent {
  task: any;
  month:any;
  file: any;
  constructor(
    public service: UserserviceService,
    public dialogRef: MatDialogRef<CompleteApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
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
    this.file = event.target.files[0];
  }

  submitApproval() {
    if (this.remark.valid) {
      // You can proceed with submitting the approval
      console.log('Remark:', this.remark.value);
      console.log('File:', this.file);
    } else {
      this.remark.markAsTouched();
    }
  }

  closeAlert() {
    this.dialogRef.close();
  }
}
