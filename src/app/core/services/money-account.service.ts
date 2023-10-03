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

  private MONEY_DATA: MoneyAccount[] = [
    {date: new Date("2023-09-11T12:42:19.000Z"), income: 100, spent: 600, expenses: [{price: 500, item: 'kinder'}, {price: 100, item: 'chupa-chups'}], balance: 1500},
    {date: new Date("2023-09-12T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1600},
    {date: new Date("2023-09-13T12:42:19.000Z"), income: 100, spent: 800, expenses: [{price: 500, item: 'kinder'}, {price: 300, item: 'crackers'}], balance: 900},
    {date: new Date("2023-09-14T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
    {date: new Date("2023-09-15T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
    {date: new Date("2023-09-16T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2023-09-17T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2023-09-18T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
    {date: new Date("2023-09-19T12:42:19.000Z"), income: 100, spent: 600, expenses: [{price: 500, item: 'kinder'}, {price: 100, item: 'chupa-chups'}], balance: 900},
    {date: new Date("2023-09-20T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
    {date: new Date("2023-09-21T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
    {date: new Date("2023-09-22T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2023-09-23T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2023-09-24T12:42:19.000Z"), income: 100, spent: 300, expenses: [{price: 300, item: 'ball'}], balance: 1100},
    {date: new Date("2023-09-25T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2023-09-26T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2023-09-27T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
    {date: new Date("2023-09-28T12:42:19.000Z"), income: 100, spent: 400, expenses: [{price: 400, item: 'juice'}], balance: 1100},
    {date: new Date("2023-09-29T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2023-09-30T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
  ]

  constructor(private transactionsService: TransactionsService) {}

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
