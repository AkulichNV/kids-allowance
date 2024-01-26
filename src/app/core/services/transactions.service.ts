import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { MoneyAccountService } from "./money-account.service";
import { MoneyAccount } from "../models/money-account.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {

  date: string = new Date().toISOString().slice(0, 7);
  moneyData: MoneyAccount[];
  moneyMonth: MoneyAccount[];
  moneyMonthChanged = new EventEmitter<MoneyAccount[]>();

  constructor(private maService: MoneyAccountService) { }

  setDate(val: string) {
    this.date = val.slice(0, 7);
    this.getMonthMoney();
    this.moneyMonthChanged.emit(this.moneyMonth);
  }

  getDate() {
    return this.date;
  }

  doObserveMoney(): Observable<MoneyAccount[]> {
    let moneyData = this.getMonthMoney();
    return of(moneyData);
  }

  getMonthMoney(): MoneyAccount[] {
    this.moneyData = this.maService.getMoney();
    this.moneyMonth = this.moneyData.filter((el) => {
      return (new Date(el.date).toISOString().indexOf(this.date) !== -1);
    });
    this.moneyMonthChanged.emit(this.moneyMonth);
    return this.moneyMonth;
  }

}
