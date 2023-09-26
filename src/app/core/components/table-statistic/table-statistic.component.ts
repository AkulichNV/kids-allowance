import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Expenses } from '../../models/expenses.model';
import { MoneyAccount } from '../../models/money-account.model';

// export interface MoneyAccountDataSource {
//   date: Date;
//   income: number;
//   spent: number;
//   expenses?: MatTableDataSource<Expenses>;
//   balance: number;
// }

const MONEY_DATA: MoneyAccount[] = [
  {date: new Date("2022-05-01T12:42:19.000Z"), income: 100, spent: 600, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], balance: 1500},
  {date: new Date("2022-05-02T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1600},
  {date: new Date("2022-05-03T12:42:19.000Z"), income: 100, spent: 800, expenses: [{cost: 500, item: 'kinder'}, {cost: 300, item: 'crackers'}], balance: 900},
  {date: new Date("2022-05-04T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
  {date: new Date("2022-05-05T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
  {date: new Date("2022-05-06T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
  {date: new Date("2022-05-07T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
  {date: new Date("2022-05-08T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
  {date: new Date("2022-05-09T12:42:19.000Z"), income: 100, spent: 600, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], balance: 900},
  {date: new Date("2022-05-10T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1000},
  {date: new Date("2022-05-11T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1100},
  {date: new Date("2022-05-12T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
  {date: new Date("2022-05-13T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
  {date: new Date("2022-05-14T12:42:19.000Z"), income: 100, spent: 300, expenses: [{cost: 300, item: 'ball'}], balance: 1100},
  {date: new Date("2022-05-15T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
  {date: new Date("2022-05-16T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
  {date: new Date("2022-05-17T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1400},
  {date: new Date("2022-05-18T12:42:19.000Z"), income: 100, spent: 400, expenses: [{cost: 400, item: 'juice'}], balance: 1100},
  {date: new Date("2022-05-19T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1200},
  {date: new Date("2022-05-20T12:42:19.000Z"), income: 100, spent: 0, expenses: [], balance: 1300},
]


@Component({
  selector: 'app-table-statistic',
  templateUrl: './table-statistic.component.html',
  styleUrls: ['./table-statistic.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableStatisticComponent implements AfterViewInit {

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Expenses>>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<MoneyAccount>(MONEY_DATA);
  moneyData: MoneyAccount[] = [];
  columnsToDisplay: string[] = ['date', 'income', 'spent', 'balance'];
  innerDisplayedColumns: string[] = ['item', 'cost'];
  expandedElement: MoneyAccount | null;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    MONEY_DATA.forEach(account => {
      if (account.expenses && Array.isArray(account.expenses) && account.expenses.length) {
        this.moneyData = [...this.moneyData, {...account, expenses: new MatTableDataSource(account.expenses)}];
      } else {
        this.moneyData = [...this.moneyData, account];
      }
    });
    this.dataSource = new MatTableDataSource(this.moneyData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: MoneyAccount) {
    element.expenses && (element.expenses as MatTableDataSource<Expenses>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Expenses>).sort = this.innerSort.toArray()[index]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
