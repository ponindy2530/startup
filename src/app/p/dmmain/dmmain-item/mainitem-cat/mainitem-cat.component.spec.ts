import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemCatComponent } from './mainitem-cat.component';

describe('MainitemCatComponent', () => {
  let component: MainitemCatComponent;
  let fixture: ComponentFixture<MainitemCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
