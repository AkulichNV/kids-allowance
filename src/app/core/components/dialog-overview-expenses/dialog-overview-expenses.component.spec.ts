import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExpensesComponent } from './dialog-overview-expenses.component';

describe('DialogOverviewExpensesComponent', () => {
  let component: DialogOverviewExpensesComponent;
  let fixture: ComponentFixture<DialogOverviewExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverviewExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
