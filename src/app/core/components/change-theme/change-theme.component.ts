import { Component } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss']
})
export class ChangeThemeComponent {

  toggleLight = true;
  toggleDark = false;

  lightClick() {
      this.toggleLight = true;
      this.toggleDark = !this.toggleLight;
  }
  darkClick() {
    this.toggleDark = true;
    this.toggleLight = !this.toggleDark;
  }

}
