import { Component } from '@angular/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent {

  toggleEn = true;
  toggleRu = false;

  enClick() {
      this.toggleEn = true;
      this.toggleRu = !this.toggleEn;
  }
  ruClick() {
    this.toggleRu = true;
    this.toggleEn = !this.toggleRu;
  }
}
