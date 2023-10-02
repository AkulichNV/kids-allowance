import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsExpensesComponent } from './transactions-expenses.component';

describe('TransactionsExpensesComponent', () => {
  let component: TransactionsExpensesComponent;
  let fixture: ComponentFixture<TransactionsExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
