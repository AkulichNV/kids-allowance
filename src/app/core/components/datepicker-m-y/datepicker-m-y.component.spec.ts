import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMYComponent } from './datepicker-m-y.component';

describe('DatepickerMYComponent', () => {
  let component: DatepickerMYComponent;
  let fixture: ComponentFixture<DatepickerMYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerMYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
