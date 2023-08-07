import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticComponent } from './list-statistic.component';

describe('ListStatisticComponent', () => {
  let component: ListStatisticComponent;
  let fixture: ComponentFixture<ListStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
