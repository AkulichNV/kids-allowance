import { MatTableDataSource } from "@angular/material/table";
import { Expenses } from "./expenses.model";

export interface MoneyAccount {
  date: Date;
  income: number;
  spent: number;
  expenses?: Expenses[] | MatTableDataSource<Expenses>;
  balance: number;
}
