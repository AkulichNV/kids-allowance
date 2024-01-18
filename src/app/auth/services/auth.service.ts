import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  // roleAs!: string;
  // isLogin = false;
  // loginChanged = new Subject<boolean>();
  // roleChanged = new Subject<string>();

  // constructor(private http: HttpClient) { }

  // login(email: string, password: string) {
  //   if (email === 'admin@mail.com') {
  //     this.roleAs = 'Admin';
  //   } else {
  //     this.roleAs = 'User';
  //   }
  //   return this.http.post<any>('/api/authenticate', { email: email, password: password })
  //     .pipe(map((user: { token: any; }) => {
  //       if (user && user.token) {
  //         this.isLogin = true;
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         localStorage.setItem('STATE', 'true');
  //         localStorage.setItem('ROLE', this.roleAs);
  //         this.loginChanged.next(this.isLogin);
  //         this.roleChanged.next(this.roleAs);
  //       }
  //       return user;
  //     }));
  // }

  // logout() {
  //   this.isLogin = false;
  //   this.roleAs = '';
  //   localStorage.setItem('STATE', 'false');
  //   localStorage.setItem('ROLE', '');
  //   localStorage.removeItem('currentUser');
  //   this.loginChanged.next(this.isLogin);
  //   this.roleChanged.next(this.roleAs);
  // }

  // isLoggedIn() {
  //   const loggedIn = localStorage.getItem('STATE');
  //   if (loggedIn == 'true')
  //     this.isLogin = true;
  //   else
  //     this.isLogin = false;
  //   this.loginChanged.next(this.isLogin);
  //   this.roleChanged.next(this.roleAs);
  //   return this.isLogin;
  // }

  // getRole() {
  //   this.roleAs = localStorage.getItem('ROLE')!;
  //   this.roleChanged.next(this.roleAs);
  //   return this.roleAs;
  // }

}
