import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutitemFormComponent } from './outitem-form.component';

describe('OutitemFormComponent', () => {
  let component: OutitemFormComponent;
  let fixture: ComponentFixture<OutitemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutitemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
