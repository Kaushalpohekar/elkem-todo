import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-time-based',
  templateUrl: './time-based.component.html',
  styleUrls: ['./time-based.component.css']
})

export class TimeBasedComponent {
  panelOpenState = false;
  displayedColumns: string[] = ['position', 'name', 'Responsibility', 'frequency', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'Comments'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  complete(element: any) {
    console.log("open Dailog Box for sending the Mail", element);
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

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    Sr_No: 1, Schedule_Equipment: 'FCE -A Cooling Tower fills & Nozzles ', Responsibility: 'Manoj Thakre', Frequency: 'Half Yearly', Jan: 1, Feb: 3, Mar: 2, Apr: 1, May: '', Jun: '', Jul: '', Aug: '', Sep: 2, Oct: '', Nov: '', Dec: '', Comments: 'Some comments for equipment 1'
  },
  {
    Sr_No: 1, Schedule_Equipment: 'FCE-B Cooling Tower fills & Nozzles ', Responsibility: 'Manoj Thakre', Frequency: 'Half Yearly', Jan: 3, Feb: '', Mar: '', Apr: 1, May: '', Jun: '', Jul: '', Aug: '', Sep: '', Oct: 2, Nov: '', Dec: '', Comments: 'Some comments for equipment 1'
  }
];
