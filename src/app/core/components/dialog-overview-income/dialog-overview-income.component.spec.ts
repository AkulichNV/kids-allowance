import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewIncomeComponent } from './dialog-overview-income.component';

describe('DialogOverviewComponent', () => {
  let component: DialogOverviewIncomeComponent;
  let fixture: ComponentFixture<DialogOverviewIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverviewIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
