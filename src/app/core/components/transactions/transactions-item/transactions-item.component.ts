import { Component, Input } from '@angular/core';
import { MoneyAccount } from '../../../models/money-account.model';

@Component({
  selector: 'app-transactions-item',
  templateUrl: './transactions-item.component.html',
  styleUrls: ['./transactions-item.component.scss']
})
export class TransactionsItemComponent {
  @Input() moneyAccount: MoneyAccount;

}
