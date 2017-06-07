import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewHomeComponent } from './mainview-home.component';

describe('MainviewHomeComponent', () => {
  let component: MainviewHomeComponent;
  let fixture: ComponentFixture<MainviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
