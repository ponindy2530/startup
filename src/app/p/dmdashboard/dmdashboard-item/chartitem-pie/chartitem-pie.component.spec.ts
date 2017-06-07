import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartitemPieComponent } from './chartitem-pie.component';

describe('ChartitemPieComponent', () => {
  let component: ChartitemPieComponent;
  let fixture: ComponentFixture<ChartitemPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartitemPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartitemPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
