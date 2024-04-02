import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  returnUrl!: string;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,
    // private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
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
    console.log(this.loginForm.value);
    // this.loading = true;
        // this.authService.login(this.loginForm.get('login')!.value, this.loginForm.get('password')!.value)
        //     .pipe(first())
        //     .subscribe({
        //       error: (error) => {
        //         this.error = true;
        //         this.errorMessage = error.message;
        //         this.loading = false;
        //         this.ref.markForCheck();
        //         this.ref.detectChanges();
        //         },
        //       complete: () => {
        //         const userRole = this.authService.getRole();
        //         if (userRole === 'ROLE_ADMIN') {
        //           this.router.navigate(['/admin']);
        //         } else {
        //           this.router.navigate(['/youtube']);
        //         }
        //       }
        //     });

  }

}
