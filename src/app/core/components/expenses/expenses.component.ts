import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  spending = new FormControl();
  toggleSpending = false;

  constructor() { }

  addClass() {
    return this.toggleSpending ? 'expanded' : '';
  }

  onToggle() {
    return this.toggleSpending = true;
  }

  addValue() {
      return this.spending.value ? this.spending.value : '0';
  }

  form() {
    return this.spending;
  }

  onSubmit() {
      return this.toggleSpending = false;
  }

}
