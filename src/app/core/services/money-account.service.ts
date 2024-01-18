import { EventEmitter, Injectable } from "@angular/core";
import { MoneyAccount } from "../models/money-account.model";
import { ExpensesService } from "./expenses.service";
import { Expenses } from "../models/expenses.model";
import { TransactionsService } from "./transactions.service";

@Injectable({
  providedIn: 'root'
})

export class MoneyAccountService {
  moneyAccountSelected = new EventEmitter<MoneyAccount>();
  moneyChanged = new EventEmitter<MoneyAccount[]>();

  private MONEY_DATA: MoneyAccount[] = [];

  constructor() {}

  setMoney(moneyData: MoneyAccount[]) {
    this.MONEY_DATA = moneyData;
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

  getMoney() {
    return this.MONEY_DATA.slice();
  }

  addMoney(item: MoneyAccount) {
    this.MONEY_DATA.push(item);
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

  addExpense(expense: Expenses) {
    this.MONEY_DATA[this.MONEY_DATA.length-1].expenses.push(expense);
    this.MONEY_DATA[this.MONEY_DATA.length-1].balance -= expense.price;
    this.MONEY_DATA[this.MONEY_DATA.length-1].spent += +expense.price;
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

  changeIncome(income: number) {
    let prevIncome = this.MONEY_DATA[this.MONEY_DATA.length-1].income;
    let prevBalance = this.MONEY_DATA[this.MONEY_DATA.length-1].balance;
    let newBalance = +income + +(prevBalance - prevIncome);

    this.MONEY_DATA[this.MONEY_DATA.length-1].income = +income;
    this.MONEY_DATA[this.MONEY_DATA.length-1].balance = newBalance;
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

}
