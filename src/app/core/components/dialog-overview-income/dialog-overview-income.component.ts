import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataIncome } from '../income/income.component';

@Component({
  selector: 'app-dialog-overview-income',
  templateUrl: './dialog-overview-income.component.html',
  styleUrls: ['./dialog-overview-income.component.scss']
})
export class DialogOverviewIncomeComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewIncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataIncome,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
