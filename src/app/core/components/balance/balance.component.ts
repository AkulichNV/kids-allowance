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
  dateNow = new Date();
  moneyDay: MoneyAccount;
  moneyAccount: MoneyAccount[];

  constructor(
    private maService: MoneyAccountService
  ) { }

  ngOnInit() {
    this.moneyAccount = this.maService.getMoney();
    const len = this.moneyAccount.length;
    this.balance = this.moneyAccount[len - 1].balance;
    this.dateLast = this.moneyAccount[len - 1].date;
    // console.log(this.balance);
    // console.log(this.moneyAccount);
    this.moneyDay = {
      date: this.dateNow,
      income: 100,
      spent: 0,
      balance: this.balance + 100
    };
  }

  // ngOnChanges(changes: MoneyAccount) {
  //   console.log(changes);
  // }

  ngDoCheck(){
    this.moneyAccount;
    const len = this.moneyAccount.length;
    this.balance = this.moneyAccount[len - 1].balance;
    console.log(this.moneyAccount[len - 1].balance);
  }

  addMoney() {

    this.maService.addMoney(this.moneyDay);
  }

}
