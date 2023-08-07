import { Component } from '@angular/core';

export interface Expenses {
  cost: number;
  item: string;
}

export interface MoneyAccount {
  date: string;
  income: number;
  expenses: Expenses[];
  total: number;
}


@Component({
  selector: 'app-list-statistic',
  templateUrl: './list-statistic.component.html',
  styleUrls: ['./list-statistic.component.scss'],
})
export class ListStatisticComponent {

  MONEY_DATA: MoneyAccount[] = [
    {date: '01.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1500},
    {date: '02.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1600},
    {date: '03.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 900},
    {date: '04.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1000},
    {date: '05.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1100},
    {date: '06.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1200},
    {date: '07.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1300},
    {date: '08.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1400},
    {date: '09.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 900},
    {date: '10.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1000},
    {date: '11.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1100},
    {date: '12.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1200},
    {date: '13.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1300},
    {date: '14.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1100},
    {date: '15.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1200},
    {date: '16.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1300},
    {date: '17.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1400},
    {date: '18.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1100},
    {date: '19.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1200},
    {date: '20.02.2022', income: 100, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], total: 1300},
  ]

}
