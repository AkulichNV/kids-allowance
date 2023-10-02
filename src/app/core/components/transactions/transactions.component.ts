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

  constructor(
    private maService: MoneyAccountService
  ) { }

  ngOnInit() {
    this.moneyAccount = this.maService.getMoney().reverse();
  }

}
