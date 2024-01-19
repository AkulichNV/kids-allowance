import { Component, OnInit } from '@angular/core';
import { MoneyAccountService } from '../../services/money-account.service';
import { MoneyAccount } from '../../models/money-account.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  moneyAccount: MoneyAccount[];
  moneyMonth: MoneyAccount[];
  transactions: MoneyAccount[];
  ReadMore:boolean = true;

  constructor(
    private maService: MoneyAccountService
  ) { }

  ngOnInit() {

  }

  ngDoCheck(){
    const currentMonth = '0'+(new Date().getMonth() + 1);
    const currentYear = new Date().getFullYear();

    this.moneyAccount = this.maService.getMoney().reverse();

    this.moneyMonth = this.moneyAccount.filter((el) => {
      let dateStr = currentYear+'-'+currentMonth;
      return (new Date(el.date).toISOString().indexOf(dateStr) !== -1);
    });

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
