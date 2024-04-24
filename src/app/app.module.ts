import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeBasedComponent } from './time-based/time-based.component';
import { TableComponent } from './table/table.component';
import { SucessDailogComponent } from './sucess-dailog/sucess-dailog.component';
import { CompleteApprovalComponent } from './complete-approval/complete-approval.component';

import { PathLocationStrategy ,LocationStrategy } from '@angular/common';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { ApprovalRequestSubTaskComponent } from './approval-request-sub-task/approval-request-sub-task.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TimeBasedComponent,
    SucessDailogComponent,
    CompleteApprovalComponent,
    AlertMsgComponent,
    ApprovalRequestSubTaskComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule, 
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [{provide : LocationStrategy , useClass : PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
