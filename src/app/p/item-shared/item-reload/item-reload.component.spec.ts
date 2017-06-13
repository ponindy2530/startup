import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReloadComponent } from './item-reload.component';

describe('ItemReloadComponent', () => {
  let component: ItemReloadComponent;
  let fixture: ComponentFixture<ItemReloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
