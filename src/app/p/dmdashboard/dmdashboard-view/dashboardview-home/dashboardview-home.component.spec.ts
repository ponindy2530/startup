import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardviewHomeComponent } from './dashboardview-home.component';

describe('DashboardviewHomeComponent', () => {
  let component: DashboardviewHomeComponent;
  let fixture: ComponentFixture<DashboardviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
