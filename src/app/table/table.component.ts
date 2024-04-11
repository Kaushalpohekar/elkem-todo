import { Component } from '@angular/core';
import { scheduled } from 'rxjs';



export interface PeriodicElement {
  name: string;
  position: number;
  frequency: string;
  symbol: string;
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
  {position: 1, name: 'Hydrogen', frequency:'Half_Yearly' , symbol: 'H', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 2, name: 'Helium', frequency:'Half Yearly' , symbol: 'He', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 3, name: 'Lithium', frequency:'Half Yearly', symbol: 'Li', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 4, name: 'Beryllium', frequency:'Half Yearly', symbol: 'Be', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 5, name: 'Boron', frequency:'Half Yearly', symbol: 'B', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 6, name: 'Carbon', frequency:'Half Yearly' , symbol: 'C', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 7, name: 'Nitrogen', frequency: 'Quaterly' , symbol: 'N', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},
  {position: 8, name: 'Oxygen', frequency: 'Half Yearly' , symbol: 'O', Jan:'', Feb:'',Mar:'', Apr:'', May:'', Jun:'', Jul:'', Aug:'', Sep:'', Oct:'', Nov:'', Dec:''},];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  displayedColumns: string[] = ['position', 'name', 'frequency', 'symbol', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dataSource = ELEMENT_DATA;

}
