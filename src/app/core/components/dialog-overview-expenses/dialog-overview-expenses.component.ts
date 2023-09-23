import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataExpenses } from '../expenses/expenses.component';

@Component({
  selector: 'app-dialog-overview-expenses',
  templateUrl: './dialog-overview-expenses.component.html',
  styleUrls: ['./dialog-overview-expenses.component.scss']
})
export class DialogOverviewExpensesComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExpensesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataExpenses,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
