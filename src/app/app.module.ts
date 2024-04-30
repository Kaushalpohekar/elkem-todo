import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from './material.module'; // Import MaterialModule here
import { ReactiveFormsModule } from '@angular/forms';
import { TimeBasedComponent } from './time-based/time-based.component';
import { TableComponent } from './table/table.component';
import { SucessDailogComponent } from './sucess-dailog/sucess-dailog.component';
import { CompleteApprovalComponent } from './complete-approval/complete-approval.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { ApprovalRequestSubTaskComponent } from './approval-request-sub-task/approval-request-sub-task.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './auth/login/login.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { AprrovedByOwnerComponent } from './aprroved-by-owner/aprroved-by-owner.component';
import { RejectApprovalComponent } from './reject-approval/reject-approval.component';
import { TableByUserComponent } from './table-by-user/table-by-user.component';
import { TimeByUserComponent } from './time-by-user/time-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TimeBasedComponent,
    SucessDailogComponent,
    CompleteApprovalComponent,
    AlertMsgComponent,
    ApprovalRequestSubTaskComponent,
    LoadingComponent,
    LoginComponent,
    OwnerListComponent,
    ViewImageComponent,
    AprrovedByOwnerComponent,
    RejectApprovalComponent,
    TableByUserComponent,
    TimeByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MaterialModule, // Include MaterialModule here
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
