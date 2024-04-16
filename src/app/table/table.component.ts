import { Component, ElementRef, ViewChild } from '@angular/core';
import { scheduled } from 'rxjs';



export interface PeriodicElement {
  name: string;
  responsible: string;
  position: string;
  frequency: string;
  Jan: string;
  Feb: string;
  Mar: string;
  Apr: string;
  May: string;
  Jun: string;
  Jul: string;
  Aug: string;
  Sep: string;
  Oct: string;
  Nov: string;
  Dec: string;
  // height: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'Induction Furnace Health CheckUp', responsible:'M. Lapkale', frequency:'Half Yearly' , Jan:'', Feb:'4',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'3', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: '2', name: 'Confined Space Inspecioon', responsible:'Prashant', frequency:'Half Yearly' ,  Jan:'', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: '3', name: 'Furnace Water Tank', responsible:'kaushal', frequency:'Half Yearly',  Jan:'', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: 'b', name: 'Admin Water Tank', responsible:'kaushal', frequency:'Half Yearly',  Jan:'', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: 'c', name: 'Operator Utility over Head Tank', responsible:'Prashant', frequency:'Half Yearly',  Jan:'', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: 'd', name: 'Fire Tank R&D Furnace Tanks', responsible:'Prashant', frequency:'Half Yearly' ,  Jan:'', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'3', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: '4', name: 'Electrical System Audit CSP 1/2/3/4/5', responsible:'Pradip Nikam', frequency: 'Quaterly' ,  Jan:'4', Feb:'',Mar:'', Apr:'3', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'3', Nov:'', Dec:''},
  {position: '5', name: 'Earthing System Audit', responsible:'M. Lapkale' ,frequency: 'Half Yearly' ,  Jan:'', Feb:'4',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'3', Sep:'', Oct:'', Nov:'', Dec:''},];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  @ViewChild('myTable') myTable!: ElementRef;

  displayedColumns: string[] = ['position', 'name', 'responsible', 'frequency', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dataSource = ELEMENT_DATA;

  getCellStyle(value: any): object {
      let style = {};
      if (value === '4') {
          style = { 'background-color': '#26ab49' }; // Change color for value 4
      } else if (value === '3') {
          style = { 'background-color': '#7682db' }; // Change color for value 3
      } else if (value === '2') {
          style = { 'background-color': '#ed7777' }; // Change color for values 1 and 2
      } else if (value === '1') {
          style = { 'background-color': '#babfbb' }; // Change color for values 1 and 2
      }
      return style;
  }

}
