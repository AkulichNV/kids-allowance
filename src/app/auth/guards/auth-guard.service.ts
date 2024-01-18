import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {
  // constructor(private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  //   let currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  //   if (currentUser) {
  //     return true;
  //   }

  //   this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

}
