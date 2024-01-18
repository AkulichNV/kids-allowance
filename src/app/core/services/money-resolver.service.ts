import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";

import { MoneyAccount } from "../models/money-account.model";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { MoneyAccountService } from "./money-account.service";

@Injectable({providedIn: 'root'})
export class MoneyResolverService implements Resolve<MoneyAccount[]> {
  constructor(private dataStorageService: DataStorageService,
    private moneyAccountService: MoneyAccountService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const moneyData = this.moneyAccountService.getMoney();

    if(moneyData.length === 0) {
      return this.dataStorageService.fetchAuroraMoney();
    } else {
      return moneyData;
    }
  }
}
