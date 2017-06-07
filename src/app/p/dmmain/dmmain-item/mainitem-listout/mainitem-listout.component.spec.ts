import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemListoutComponent } from './mainitem-listout.component';

describe('MainitemListoutComponent', () => {
  let component: MainitemListoutComponent;
  let fixture: ComponentFixture<MainitemListoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemListoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemListoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
