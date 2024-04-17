import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  Sr_No: any;
  Schedule_Equipment: any;
  Subtask: any;
  admin_email: any;
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
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['position', 'name', 'admin_email', 'responsible', 'frequency', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  dataSource = new MatTableDataSource<PeriodicElement>(); // Define MatTableDataSource

  constructor(public service: UserserviceService) {}

  ngOnInit(): void {
    this.getuserdata();
    this.getalltask();
  }

  getuserdata() {
    this.service.getALlUserdata().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        let counter = 1;
        this.dataSource.data = data.devices.map((item: any, index: number) => ({
          position: counter++,
          name: item.Schedule_Equipment,
          responsible: item.Subtask || '',
          frequency: item.Frequency.toLowerCase(),
          admin_email: item.admin_email,
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
        if (this.paginator) {
          this.dataSource.paginator = this.paginator; // Assign the paginator
        }
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  getalltask() {
    this.service.getALltask().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.totalTasks = data.totalTasks;
        this.overdueTasks = data.overdueTasks;
        this.inProgressTasks = data.inProgressTasks;
        this.completedTasks = data.completedTasks;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

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
    const status = element[month];
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
      width: '30px',
      height: '20px'
    };
  }
}
