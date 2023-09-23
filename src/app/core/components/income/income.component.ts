import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewIncomeComponent } from '../dialog-overview-income/dialog-overview-income.component';

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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewIncomeComponent, {
      data: {income: this.allowance},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.allowance = result;
    });
  }

}
