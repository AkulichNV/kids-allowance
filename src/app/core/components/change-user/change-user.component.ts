import { Component } from '@angular/core';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss']
})
export class ChangeUserComponent {
  toggleAurora = true;
  toggleAdrian = false;

  auroraClick() {
      this.toggleAurora = true;
      this.toggleAdrian = !this.toggleAurora;
  }
  adrianClick() {
    this.toggleAdrian = true;
    this.toggleAurora = !this.toggleAdrian;
  }

}
