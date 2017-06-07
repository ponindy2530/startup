import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemSupComponent } from './mainitem-sup.component';

describe('MainitemSupComponent', () => {
  let component: MainitemSupComponent;
  let fixture: ComponentFixture<MainitemSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
