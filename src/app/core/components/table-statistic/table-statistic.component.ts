import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Expenses {
  cost: number;
  item: string;
}

export interface MoneyAccount {
  date: string;
  income: number;
  spent: number;
  expenses?: Expenses[] | MatTableDataSource<Expenses>;
  balance: number;
}

export interface MoneyAccountDataSource {
  date: string;
  income: number;
  spent: number;
  expenses?: MatTableDataSource<Expenses>;
  balance: number;
}

const MONEY_DATA: MoneyAccount[] = [
  {date: '01.02.2022', income: 100, spent: 600, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], balance: 1500},
  {date: '02.02.2022', income: 100, spent: 0, expenses: [], balance: 1600},
  {date: '03.02.2022', income: 100, spent: 800, expenses: [{cost: 500, item: 'kinder'}, {cost: 300, item: 'crackers'}], balance: 900},
  {date: '04.02.2022', income: 100, spent: 0, expenses: [], balance: 1000},
  {date: '05.02.2022', income: 100, spent: 0, expenses: [], balance: 1100},
  {date: '06.02.2022', income: 100, spent: 0, expenses: [], balance: 1200},
  {date: '07.02.2022', income: 100, spent: 0, expenses: [], balance: 1300},
  {date: '08.02.2022', income: 100, spent: 0, expenses: [], balance: 1400},
  {date: '09.02.2022', income: 100, spent: 600, expenses: [{cost: 500, item: 'kinder'}, {cost: 100, item: 'chupa-chups'}], balance: 900},
  {date: '10.02.2022', income: 100, spent: 0, expenses: [], balance: 1000},
  {date: '11.02.2022', income: 100, spent: 0, expenses: [], balance: 1100},
  {date: '12.02.2022', income: 100, spent: 0, expenses: [], balance: 1200},
  {date: '13.02.2022', income: 100, spent: 0, expenses: [], balance: 1300},
  {date: '14.02.2022', income: 100, spent: 300, expenses: [{cost: 300, item: 'ball'}], balance: 1100},
  {date: '15.02.2022', income: 100, spent: 0, expenses: [], balance: 1200},
  {date: '16.02.2022', income: 100, spent: 0, expenses: [], balance: 1300},
  {date: '17.02.2022', income: 100, spent: 0, expenses: [], balance: 1400},
  {date: '18.02.2022', income: 100, spent: 400, expenses: [{cost: 400, item: 'juice'}], balance: 1100},
  {date: '19.02.2022', income: 100, spent: 0, expenses: [], balance: 1200},
  {date: '20.02.2022', income: 100, spent: 0, expenses: [], balance: 1300},
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

  // displayedColumns: string[] = ['date', 'income', 'expenses', 'balance'];
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

  // applyFilter(filterValue: string) {
  //   this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Expenses>).filter = filterValue.trim().toLowerCase());
  // }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
