import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { StatisticPageComponent } from './core/pages/statistic-page/statistic-page.component';
import { MaterialModule } from 'src/material.module';
import { BalanceComponent } from './core/components/balance/balance.component';
import { IncomeComponent } from './core/components/income/income.component';
import { SortBarComponent } from './core/components/sort-bar/sort-bar.component';
import { TableStatisticComponent } from './core/components/table-statistic/table-statistic.component';
import { ListStatisticComponent } from './core/components/list-statistic/list-statistic.component';
import { DatepickerMYComponent } from './core/components/datepicker-m-y/datepicker-m-y.component';
import { SettingPageComponent } from './core/pages/setting-page/setting-page.component';
import { ChangeUserComponent } from './core/components/change-user/change-user.component';
import { ChangeLanguageComponent } from './core/components/change-language/change-language.component';
import { ChangeThemeComponent } from './core/components/change-theme/change-theme.component';
import { LogoutComponent } from './core/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    StatisticPageComponent,
    BalanceComponent,
    IncomeComponent,
    SortBarComponent,
    TableStatisticComponent,
    ListStatisticComponent,
    DatepickerMYComponent,
    SettingPageComponent,
    ChangeUserComponent,
    ChangeLanguageComponent,
    ChangeThemeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
