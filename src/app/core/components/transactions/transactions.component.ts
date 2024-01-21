import { Component, OnInit } from '@angular/core';
import { MoneyAccountService } from '../../services/money-account.service';
import { MoneyAccount } from '../../models/money-account.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  moneyMonth: MoneyAccount[];
  transactions: MoneyAccount[];
  currentMonth: string;
  ReadMore:boolean = true;

  constructor(
    private transService: TransactionsService
  ) { }

  ngOnInit() {

  }

  ngDoCheck(){
    this.currentMonth = new Date().toISOString().slice(0, 7);
    this.transService.setDate(this.currentMonth);

    this.moneyMonth = this.transService.getMonthMoney().reverse();

    if (this.ReadMore) {
      this.transactions = this.moneyMonth.slice(0, 5);
    } else {
      this.transactions = this.moneyMonth.slice();
    }
  }

  onOpenTransactions() {
    this.ReadMore = !this.ReadMore;
  }

}
