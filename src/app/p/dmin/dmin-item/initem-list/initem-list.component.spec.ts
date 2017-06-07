import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitemListComponent } from './initem-list.component';

describe('InitemListComponent', () => {
  let component: InitemListComponent;
  let fixture: ComponentFixture<InitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
