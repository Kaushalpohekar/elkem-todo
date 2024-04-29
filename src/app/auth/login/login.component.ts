import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AlertMsgComponent } from '../../alert-msg/alert-msg.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  UserId!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private dialog: MatDialog) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          const token = response.token;
          this.authService.setToken(token);
          const checkUserType = () => {
            const userType = this.authService.getUserType();
            if (userType) {
              this.UserId = sessionStorage.getItem('UserId') ?? '';
              this.redirectUser(userType);
            } else {
              setTimeout(checkUserType, 100);
            }
          };
          checkUserType();
        },
        (error) => {
          this.showAlert('error', 'Inalid Credentials');
        }
      );
    } else {
      this.showAlert('error', 'This Form data is not Valid');
    }
  }

  redirectUser(userType: string) {
    if (userType === 'Responsibility') {
      this.router.navigate(['/tableByUser']);
    } else if (userType === 'Owner') {
      this.router.navigate(['/table']);
    }
  }

  showAlert(type: string, message: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { type, message };
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AlertMsgComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }
}
