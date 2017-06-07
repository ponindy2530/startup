import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemListmainComponent } from './mainitem-listmain.component';

describe('MainitemListmainComponent', () => {
  let component: MainitemListmainComponent;
  let fixture: ComponentFixture<MainitemListmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemListmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemListmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
