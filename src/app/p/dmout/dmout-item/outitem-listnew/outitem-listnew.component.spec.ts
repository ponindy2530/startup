import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutitemListnewComponent } from './outitem-listnew.component';

describe('OutitemListnewComponent', () => {
  let component: OutitemListnewComponent;
  let fixture: ComponentFixture<OutitemListnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutitemListnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutitemListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
