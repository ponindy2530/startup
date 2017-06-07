import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartitemMonthComponent } from './chartitem-month.component';

describe('ChartitemMonthComponent', () => {
  let component: ChartitemMonthComponent;
  let fixture: ComponentFixture<ChartitemMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartitemMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartitemMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
