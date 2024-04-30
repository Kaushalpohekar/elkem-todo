import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent {
  message!: any;
  type!: any;
  constructor(
    public dialogRef: MatDialogRef<AlertMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.message = data.message;
    this.type = data.type;
  }
}
