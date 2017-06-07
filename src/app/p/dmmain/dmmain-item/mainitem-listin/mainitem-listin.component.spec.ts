import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemListinComponent } from './mainitem-listin.component';

describe('MainitemListinComponent', () => {
  let component: MainitemListinComponent;
  let fixture: ComponentFixture<MainitemListinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemListinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemListinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
