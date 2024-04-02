import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidatorPassword } from '../../helpers/utile';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
    // private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      Fname: new FormControl('', [Validators.required]),
      Lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, customValidatorPassword()])
    })
    // this.authService.logout();
  }

  getErrorFirstName() {
    return this.signupForm.get('Fname')!.hasError('required') ? 'Please enter your first name' : '';
  }

  getErrorLastName() {
    return this.signupForm.get('Lname')!.hasError('required') ? 'Please enter your last name' : '';
  }

  getErrorMessageEmail() {
    if (this.signupForm.get('email')!.hasError('required')) {
      return 'Please enter a login email';
    }
    return this.signupForm.get('email')!.hasError('email') ? 'The login email is invalid' : '';
  }

  getErrorMessagePassword() {
    if (this.signupForm.get('password')!.hasError('required')) {
      return 'Please enter a password';
    }
    return this.signupForm.get('password')!.hasError('customValidatorPassword') ? '' : this.signupForm.get('password')!.errors?.['Error'].message;
  }


}
