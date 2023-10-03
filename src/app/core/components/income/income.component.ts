import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewIncomeComponent } from '../dialog-overview-income/dialog-overview-income.component';
import { MoneyAccountService } from '../../services/money-account.service';
import { MoneyAccount } from '../../models/money-account.model';

export interface DialogDataIncome {
  income: number;
}

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  allowance = 100;
  moneyAccount: MoneyAccount[];

  constructor(
    public dialog: MatDialog,
    private maService: MoneyAccountService
    ) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.moneyAccount = this.maService.getMoney();
    this.allowance = this.moneyAccount[this.moneyAccount.length - 1].income;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewIncomeComponent, {
      data: {income: this.allowance},
    });

    dialogRef.afterClosed().subscribe(result => {
      let resNum = Number(result);
      if (resNum && typeof resNum === 'number') {
      this.maService.changeIncome(resNum);
      this.allowance = resNum;
      }
    });
  }

}
