import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviewHomeComponent } from './inview-home.component';

describe('InviewHomeComponent', () => {
  let component: InviewHomeComponent;
  let fixture: ComponentFixture<InviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
