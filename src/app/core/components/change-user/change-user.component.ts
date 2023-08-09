import { Component } from '@angular/core';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss']
})
export class ChangeUserComponent {
  toggleAurora = true;
  toggleAdrian = false;

  
  enableDisableRule() {
      this.toggleAurora = this.toggleAdrian;
      this.toggleAdrian = !this.toggleAurora;
      
  }
}
