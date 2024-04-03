import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, first } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthResponseData } from '../../models/auth-response-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  returnUrl!: string;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    // this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth/login';
  }

  getErrorMessageLogin() {
    if (this.loginForm.get('email')!.hasError('required')) {
      return 'Please enter your login email';
    }
    return this.loginForm.get('email')!.hasError('email') ? 'The login email is invalid' : '';
  }

  getErrorMessagePassword() {
    return this.loginForm.get('password')!.hasError('required') ? 'Please enter your password' : '';
  }

  onLogin() {
    // console.log(this.loginForm.value);
      if(!this.loginForm.valid) {
        return;
      }
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // let authObs: Observable<AuthResponseData>

      this.isLoading = true;

      this.authService.login(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        error: (errorMessage) => {
          console.log(errorMessage);
          this.isLoading = false;
          this._snackBar.open(errorMessage, 'Close');
        }
      })

  }

}
