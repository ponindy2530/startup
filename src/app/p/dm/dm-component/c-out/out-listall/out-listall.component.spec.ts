import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutListallComponent } from './out-listall.component';

describe('OutListallComponent', () => {
  let component: OutListallComponent;
  let fixture: ComponentFixture<OutListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
