import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitemListnewComponent } from './initem-listnew.component';

describe('InitemListnewComponent', () => {
  let component: InitemListnewComponent;
  let fixture: ComponentFixture<InitemListnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitemListnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitemListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
