import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    // private authService: AuthService,
    private router: Router) {}

  onLogout() {
    // this.authService.logout();
    // this.admin = false;
    // this.router.navigate(['/', 'auth', '/', 'login']);
    this.router.navigate(['/auth/login']);
  }

}
