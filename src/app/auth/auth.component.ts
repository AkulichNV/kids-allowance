import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login = false;

  constructor() { }

  ngOnInit(): void {
    // this.login = localStorage.getItem('currentUser') ? true : false;
  }

}
