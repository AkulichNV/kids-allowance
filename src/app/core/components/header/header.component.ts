import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mainMode: boolean;
  currentRoute: any;

  constructor(private router:Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd),
    startWith(this.router))
    .subscribe((event: NavigationEnd) => {
      this.currentRoute = event.url;
      this.currentRoute === '/main' ?  this.mainMode = true : this.mainMode = false;
    });
  }

}
