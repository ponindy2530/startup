import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormproductComponent } from './item-formproduct.component';

describe('ItemFormproductComponent', () => {
  let component: ItemFormproductComponent;
  let fixture: ComponentFixture<ItemFormproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFormproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
