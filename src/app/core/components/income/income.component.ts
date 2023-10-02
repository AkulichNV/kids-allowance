import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewIncomeComponent } from '../dialog-overview-income/dialog-overview-income.component';
import { MoneyAccountService } from '../../services/money-account.service';

export interface DialogDataIncome {
  income: number;
}

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  allowance = 100;

  constructor(
    public dialog: MatDialog,
    private maService: MoneyAccountService
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewIncomeComponent, {
      data: {income: this.allowance},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.maService.changeIncome(result);
      this.allowance = result;
    });
  }

}
