import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSlideOutComponent } from './c-slide-out.component';

describe('CSlideOutComponent', () => {
  let component: CSlideOutComponent;
  let fixture: ComponentFixture<CSlideOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSlideOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
