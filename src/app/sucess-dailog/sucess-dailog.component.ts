import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-sucess-dailog',
  templateUrl: './sucess-dailog.component.html',
  styleUrls: ['./sucess-dailog.component.css']
})
export class SucessDailogComponent {
  task!: any;
  month: any;
  constructor(
    public dialogRef: MatDialogRef<SucessDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.task = data.task;
    this.month = data.month;
    console.log(this.task);
  }
}
