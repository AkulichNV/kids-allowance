import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {
  income = 100;
  incomeChanged = new Subject<number>();

  constructor() { }

  setIncome(val: number) {
    return this.income = val;
  }

  updateIncome() {
    this.incomeChanged.next(this.income);
  }

}
