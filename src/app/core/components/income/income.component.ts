import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  income = new FormControl();
  spending = new FormControl();
  toggleIncome = false;
  toggleSpending = false;
  @Input() incomeMode: boolean;

  constructor() { }

  addClass() {
    return this.incomeMode ? (this.toggleIncome ? 'expanded' : '') : (this.toggleSpending ? 'expanded' : '');
  }

  onToggle() {
    return this.incomeMode ? (this.toggleIncome = true) : (this.toggleSpending = true);
  }

  addValue() {
    if(this.incomeMode) {
      return this.income.value ? this.income.value : '100';
    } else {
      return this.spending.value ? this.spending.value : '0';
    }
  }

  form() {
    return this.incomeMode ? this.income : this.spending;
  }

  onSubmit() {
    if(this.incomeMode) {
      return this.toggleIncome = false;
    } else {
      return this.toggleSpending = false;
    }
  }

}
