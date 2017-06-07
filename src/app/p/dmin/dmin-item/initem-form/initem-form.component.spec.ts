import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitemFormComponent } from './initem-form.component';

describe('InitemFormComponent', () => {
  let component: InitemFormComponent;
  let fixture: ComponentFixture<InitemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
