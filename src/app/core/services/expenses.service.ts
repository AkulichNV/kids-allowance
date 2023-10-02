import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Expenses } from "../models/expenses.model";
import { MoneyAccount } from "../models/money-account.model";
import { MoneyAccountService } from "./money-account.service";

// @Injectable()

export class ExpensesService {
  expenses: Expenses[];
  price = 0;
  item = '';
  expensesChanged = new Subject<Expenses[]>();

  constructor(private maService: MoneyAccountService) { }

  setExpense(item: Expenses) {
    return this.expenses.push(item);
  }

  getExpenses() {
    return this.expenses.slice();
  }

  updateExpenses(newItems: Expenses[]) {
    this.expenses = newItems;
    this.expensesChanged.next(this.expenses);
  }

  // addExpensesToMoneyAccount(item: Expenses) {
  //   this.maService.addExpense(item);
  // }
}
