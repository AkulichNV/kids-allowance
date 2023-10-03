import { Component, OnChanges, OnInit } from '@angular/core';
import { MoneyAccount } from '../../models/money-account.model';
import { MoneyAccountService } from '../../services/money-account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance: number;
  dateLast: Date;
  dateAddOne: Date;
  dateNow = new Date();
  sameDates: boolean;
  moneyDay: MoneyAccount;
  moneyAccount: MoneyAccount[];

  constructor(
    private maService: MoneyAccountService
  ) { }

  ngOnInit() {

    // const len = this.moneyAccount.length;
    // this.balance = this.moneyAccount[len - 1].balance;
    // this.dateLast = this.moneyAccount[len - 1].date;
    // this.dateAddOne = this.addOneDay(this.dateLast);

    // toLocaleDateString();
    // console.log(this.dateLast.toLocaleDateString(), this.dateNow.toLocaleDateString(), this.sameDates);
    // console.log(this.moneyAccount);

  }


  ngDoCheck(){
    // this.moneyAccount;
    this.moneyAccount = this.maService.getMoney();
    const len = this.moneyAccount.length;
    this.balance = this.moneyAccount[len - 1].balance;
    this.dateLast = this.moneyAccount[len - 1].date;
    this.sameDates = this.dateLast.toLocaleDateString() === this.dateNow.toLocaleDateString();
  }

  addMoney() {
    this.dateAddOne = this.addOneDay(this.dateLast);
    this.moneyDay = {
      date: this.dateAddOne,
      income: 100,
      spent: 0,
      expenses: [],
      balance: this.balance + 100
    };
    this.maService.addMoney(this.moneyDay);
    // console.log(this.dateAddOne);
    // this.moneyAccount = this.maService.getMoney();
  }

  addOneDay(date: Date) {
    const curDate = new Date(date.valueOf());
    const newDate = curDate.setDate(curDate.getDate() + 1);
    return new Date(newDate);
  }

}
