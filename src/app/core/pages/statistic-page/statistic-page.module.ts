import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { HeaderComponent } from '../../components/header/header.component';
import { StatisticPageComponent } from './statistic-page.component';
import { StatisticPageRoutingModule } from './statistic-page-routing.module';
import { SortBarComponent } from '../../components/sort-bar/sort-bar.component';
import { TableStatisticComponent } from '../../components/table-statistic/table-statistic.component';
import { DatepickerMYComponent } from '../../components/datepicker-m-y/datepicker-m-y.component';


@NgModule({
  declarations: [
    StatisticPageComponent,
    // HeaderComponent,
    SortBarComponent,
    TableStatisticComponent,
    DatepickerMYComponent
  ],
  imports: [
    CommonModule,
    StatisticPageRoutingModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StatisticPageModule { }
