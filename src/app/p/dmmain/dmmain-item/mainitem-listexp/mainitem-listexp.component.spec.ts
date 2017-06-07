import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemListexpComponent } from './mainitem-listexp.component';

describe('MainitemListexpComponent', () => {
  let component: MainitemListexpComponent;
  let fixture: ComponentFixture<MainitemListexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemListexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemListexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
