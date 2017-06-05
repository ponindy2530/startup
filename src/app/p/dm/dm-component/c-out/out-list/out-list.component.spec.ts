import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutListComponent } from './out-list.component';

describe('OutListComponent', () => {
  let component: OutListComponent;
  let fixture: ComponentFixture<OutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
