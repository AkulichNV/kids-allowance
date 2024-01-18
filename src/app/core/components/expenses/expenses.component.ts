import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExpensesComponent } from '../dialog-overview-expenses/dialog-overview-expenses.component';
import { ExpensesService } from '../../services/expenses.service';
import { MoneyAccountService } from '../../services/money-account.service';
import { MoneyAccount } from '../../models/money-account.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

export interface DialogDataExpenses {
  price: number;
  item: string;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit{
  moneyAccount: MoneyAccount[];
  spent: number;
  price = 0;
  item: number;

  constructor(
    public dialog: MatDialog,
    private maService: MoneyAccountService,
    private dataStorageService: DataStorageService
    ) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.moneyAccount = this.maService.getMoney();
    this.spent = this.moneyAccount[this.moneyAccount.length - 1].spent;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExpensesComponent, {
      data: {price: this.price, item: this.item},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.maService.addExpense(result);
        this.dataStorageService.storeAuroraMoney();
      }
    });
  }
}
