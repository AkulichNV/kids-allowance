import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Expenses } from "../models/expenses.model";

@Injectable({
  providedIn: 'root'
})

export class ExpensesService {
  expenses: Expenses[];
  price = 0;
  item = '';
  expensesChanged = new Subject<Expenses[]>();

  constructor() { }

  setExpenses(items: Expenses[]) {
    return this.expenses = items;
  }

  getExpenses() {
    return this.expenses.slice();
  }

  updateExpenses(newItems: Expenses[]) {
    this.expenses = newItems;
    this.expensesChanged.next(this.expenses);
  }
}
