import { Component } from "@angular/core";
import * as Highcharts from "highcharts/highcharts-gantt";
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  CriticalProcess(){
    this.router.navigate(['/table']);
  }

  TimeBased() {
    this.router.navigate(['/time']);
  }
}