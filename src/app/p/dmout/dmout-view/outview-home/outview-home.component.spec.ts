import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutviewHomeComponent } from './outview-home.component';

describe('OutviewHomeComponent', () => {
  let component: OutviewHomeComponent;
  let fixture: ComponentFixture<OutviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
