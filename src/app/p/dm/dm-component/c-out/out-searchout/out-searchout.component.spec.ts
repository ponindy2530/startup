import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutSearchoutComponent } from './out-searchout.component';

describe('OutSearchoutComponent', () => {
  let component: OutSearchoutComponent;
  let fixture: ComponentFixture<OutSearchoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutSearchoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutSearchoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
