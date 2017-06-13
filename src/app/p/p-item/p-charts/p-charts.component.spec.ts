import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PChartsComponent } from './p-charts.component';

describe('PChartsComponent', () => {
  let component: PChartsComponent;
  let fixture: ComponentFixture<PChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
