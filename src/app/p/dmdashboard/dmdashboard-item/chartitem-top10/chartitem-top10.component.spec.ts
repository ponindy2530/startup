import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartitemTop10Component } from './chartitem-top10.component';

describe('ChartitemTop10Component', () => {
  let component: ChartitemTop10Component;
  let fixture: ComponentFixture<ChartitemTop10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartitemTop10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartitemTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
