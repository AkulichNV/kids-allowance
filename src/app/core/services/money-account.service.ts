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
    {date: new Date("2022-05-01T12:42:19.000Z"), income: 100, spent: 600, expenses: [{price: 500, item: 'kinder'}, {price: 100, item: 'chupa-chups'}], balance: 1500},
    {date: new Date("2022-05-02T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1600},
    {date: new Date("2022-05-03T12:42:19.000Z"), income: 100, spent: 800, expenses: [{price: 500, item: 'kinder'}, {price: 300, item: 'crackers'}], balance: 900},
    {date: new Date("2022-05-04T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
    {date: new Date("2022-05-05T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
    {date: new Date("2022-05-06T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2022-05-07T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2022-05-08T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
    {date: new Date("2022-05-09T12:42:19.000Z"), income: 100, spent: 600, expenses: [{price: 500, item: 'kinder'}, {price: 100, item: 'chupa-chups'}], balance: 900},
    {date: new Date("2022-05-10T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
    {date: new Date("2022-05-11T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
    {date: new Date("2022-05-12T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2022-05-13T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2022-05-14T12:42:19.000Z"), income: 100, spent: 300, expenses: [{price: 300, item: 'ball'}], balance: 1100},
    {date: new Date("2022-05-15T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2022-05-16T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
    {date: new Date("2022-05-17T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
    {date: new Date("2022-05-18T12:42:19.000Z"), income: 100, spent: 400, expenses: [{price: 400, item: 'juice'}], balance: 1100},
    {date: new Date("2022-05-19T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
    {date: new Date("2022-05-20T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
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
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

  changeIncome(income: number) {
    this.MONEY_DATA[this.MONEY_DATA.length-1].income = income;
    this.moneyChanged.emit(this.MONEY_DATA.slice());
  }

}
