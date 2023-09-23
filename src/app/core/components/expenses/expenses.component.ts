import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExpensesComponent } from '../dialog-overview-expenses/dialog-overview-expenses.component';

export interface DialogDataExpenses {
  price: number;
  item: string;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  price = 0;
  item: number;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExpensesComponent, {
      data: {price: this.price, item: this.item},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.price = result.price;
      this.item = result.item;
    });
  }
}
