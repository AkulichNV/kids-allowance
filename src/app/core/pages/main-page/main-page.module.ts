import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from '../../pages/main-page/main-page.component';
import { BalanceComponent } from '../../components/balance/balance.component';
import { IncomeComponent } from '../../components/income/income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { HeaderComponent } from '../../components/header/header.component';
import { ExpensesComponent } from '../../components/expenses/expenses.component';


@NgModule({
  declarations: [
    MainPageComponent,
    BalanceComponent,
    IncomeComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule { }
