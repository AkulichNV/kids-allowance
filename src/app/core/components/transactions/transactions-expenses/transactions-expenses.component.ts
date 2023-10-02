import { Component, Input } from '@angular/core';
import { Expenses } from 'src/app/core/models/expenses.model';

@Component({
  selector: 'app-transactions-expenses',
  templateUrl: './transactions-expenses.component.html',
  styleUrls: ['./transactions-expenses.component.scss']
})
export class TransactionsExpensesComponent {
  @Input() expense: Expenses;

}
