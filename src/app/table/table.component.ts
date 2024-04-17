import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';

export interface PeriodicElement {
  Sr_No: any;
  Schedule_Equipment: any;
  Subtask: any;
  admin_email:any;
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
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  totalTasks: number = 0;
 overdueTasks: number = 0;
inProgressTasks: number = 0;
completedTasks: number = 0;

  @ViewChild('myTable') myTable!: ElementRef;

  displayedColumns: string[] = ['position', 'name', 'admin_email','responsible', 'frequency', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  dataSource: PeriodicElement[] = [];

  constructor(public service: UserserviceService) {}

  getCellStyle(value: any): object {
    let style = {};
    switch (value) {
        case '4':
            style = { 'background-color': '#54A954' }; // Completed
            break;
        case '3':
            style = { 'background-color': '#7982E0' }; // Pending
            break;
        case '2':
            style = { 'background-color': '#DE7D70' }; // Not submitted
            break;
        case '1':
            style = { 'background-color': '#FFD700' }; // Yellow (Custom color for value 1)
            break;
        default:
            style = { 'background-color': 'white' }; // Default color
            break;
    }
    return style;
}

getTaskStatus(element: any, month: string) {
  // Replace this logic with your own to determine the task status (completed, pending, not submitted)
  const status = element[month]; // Get the status of the month from the element
  let color = '';
  switch (status) {
      case 0: // Not submitted
          color = '#DE7D70';
          break;
      case 1: // Completed
          color = '#54A954';
          break;
      case 2: // Pending
          color = '#7982E0';
          break;
      case null: // Null value
          color = 'white';
          break;
      default:
          color = 'white';
  }
  return {
      'background-color': color,
      width: '30px', // Adjust the width of the rectangle as per your requirement
      height: '20px' // Adjust the height of the rectangle as per your requirement
  };
}


  ngOnInit(): void {
    this.getuserdata();
    this.getalltask();
  }

  getuserdata() {
    this.service.getALlUserdata().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        let counter = 1;
        this.dataSource = data.devices.map((item: any, index: number) => ({
          position: counter++,
          name: item.Schedule_Equipment,
          responsible: item.Subtask || '',
          frequency: item.Frequency.toLowerCase(),
          admin_email:item.admin_email,
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
          december: item.December
        }));
        // console.log('Mapped Data:', this.dataSource);
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  getalltask() {
    this.service.getALltask().subscribe(
        (data: any) => {
            console.log('API Response:', data); // Log API data to the console
            this.totalTasks = data.totalTasks;
            this.overdueTasks = data.overdueTasks;
            this.inProgressTasks = data.inProgressTasks;
            this.completedTasks = data.completedTasks;
        },
        (error: any) => {
            console.error('Error fetching data:', error); // Log error if there's any issue with fetching data
        }
    );
}

}
