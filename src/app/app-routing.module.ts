import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TimeBasedComponent } from './time-based/time-based.component';

const routes: Routes = [
  
  {path: 'table', component: TableComponent},
  {path: 'time', component: TimeBasedComponent},
  {path: '**', redirectTo: 'table', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
