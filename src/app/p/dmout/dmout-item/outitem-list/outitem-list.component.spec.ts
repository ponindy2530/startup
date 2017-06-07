import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutitemListComponent } from './outitem-list.component';

describe('OutitemListComponent', () => {
  let component: OutitemListComponent;
  let fixture: ComponentFixture<OutitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
