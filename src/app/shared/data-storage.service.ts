import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MoneyAccountService } from "../core/services/money-account.service";
import { MoneyAccount } from "../core/models/money-account.model";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
    private moneyAccountService: MoneyAccountService) {}

  storeAuroraMoney() {
    const moneyData = this.moneyAccountService.getMoney();
    this.http
      .put(
        'https://kids-allowance-ab45e-default-rtdb.asia-southeast1.firebasedatabase.app/Aurora.json',
        moneyData
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchAuroraMoney() {
    return this.http
      .get<MoneyAccount[]>(
        'https://kids-allowance-ab45e-default-rtdb.asia-southeast1.firebasedatabase.app/Aurora.json')
      .pipe(
          map(moneyData => {
            if (moneyData === null) {
              return [{
                date: new Date('2024-01-01'),
                income: 100,
                spent: 0,
                expenses: [],
                balance: 100
              }]
            }else {
              return moneyData.map(moneyDay => {
                return {...moneyDay, expenses: moneyDay.expenses ? moneyDay.expenses : []}
              })
            }

        }),
        tap(moneyData => {
          this.moneyAccountService.setMoney(moneyData);
        })
      );
  }
}
