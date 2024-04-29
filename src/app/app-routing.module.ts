import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TimeBasedComponent } from './time-based/time-based.component';
import { LoginComponent } from './auth/login/login.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth.guard';
import { PageGuard } from './guard/page.guard';
import { UserType } from './guard/user-type.enum'; // Assuming UserType enum exists

import { TableByUserComponent } from './table-by-user/table-by-user.component';
import { TimeByUserComponent } from './time-by-user/time-by-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard, PageGuard], data: { userType: UserType.Owner } },
  { path: 'time', component: TimeBasedComponent, canActivate: [AuthGuard, PageGuard], data: { userType: UserType.Owner } },
  { path: 'approval', component: OwnerListComponent, canActivate: [AuthGuard, PageGuard], data: { userType: UserType.Owner } },
  { path: 'timeByUser', component: TimeByUserComponent, canActivate: [AuthGuard, PageGuard], data: { userType: UserType.Responsibility } },
  { path: 'tableByUser', component: TableByUserComponent, canActivate: [AuthGuard, PageGuard], data: { userType: UserType.Responsibility } },
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: '**', redirectTo: 'table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
