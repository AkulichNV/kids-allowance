import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Expenses } from '../../models/expenses.model';
import { TransactionsService } from '../../services/transactions.service';
import { Subscription } from 'rxjs';

export interface MoneyAccountDataSource {
  date: Date;
  income: number;
  spent: number;
  expenses?: MatTableDataSource<Expenses>;
  balance: number;
}

export interface MoneyAccount {
  date: Date;
  income: number;
  spent: number;
  expenses?: Expenses[] | MatTableDataSource<Expenses>;
  balance: number;
}

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
  ]
})

export class TableStatisticComponent implements AfterViewInit, OnInit {

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Expenses>>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  MONEY_DATA: MoneyAccount[]
  dataSource: MatTableDataSource<MoneyAccount>;
  moneyData: any[] = [];
  columnsToDisplay: string[] = ['date', 'income', 'spent', 'balance'];
  innerDisplayedColumns: string[] = ['item', 'price'];
  expandedElement: MoneyAccount | null;
  subscription!: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private transService: TransactionsService,
  ) { }


  ngOnInit(): void {
    this.transService.doObserveMoney().subscribe((data: MoneyAccount[]) => {
      this.MONEY_DATA = this.transService.getMonthMoney();
      this.dataSource = new MatTableDataSource<MoneyAccount>(this.MONEY_DATA);
      this.getData();
    });

    this.subscription = this.transService.moneyMonthChanged
    .subscribe(
      (data: MoneyAccount[]) => {
        this.MONEY_DATA = data;
        this.dataSource = new MatTableDataSource<MoneyAccount>(data);
        this.getData();
      });
  }

  getData() {
      this.moneyData = [];
      this.MONEY_DATA.forEach(account => {
        if (account.expenses && Array.isArray(account.expenses) && account.expenses.length) {
          this.moneyData = [...this.moneyData, {...account, expenses: new MatTableDataSource(account.expenses)}];
        } else {
          this.moneyData = [...this.moneyData, account];
        }
      });
      this.dataSource = new MatTableDataSource(this.moneyData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  toggleRow(element: MoneyAccount) {
    (element.expenses as MatTableDataSource<Expenses>).data && (element.expenses as MatTableDataSource<Expenses>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Expenses>).sort = this.innerSort.toArray()[index]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
