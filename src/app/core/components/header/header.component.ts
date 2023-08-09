import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lightMode = true;

  onLightMode() {
    this.lightMode ? this.lightMode = false : this.lightMode = true;
  }

}
