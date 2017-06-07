import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemListstockComponent } from './mainitem-liststock.component';

describe('MainitemListstockComponent', () => {
  let component: MainitemListstockComponent;
  let fixture: ComponentFixture<MainitemListstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemListstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemListstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
