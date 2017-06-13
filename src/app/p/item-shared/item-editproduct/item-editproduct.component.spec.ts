import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditproductComponent } from './item-editproduct.component';

describe('ItemEditproductComponent', () => {
  let component: ItemEditproductComponent;
  let fixture: ComponentFixture<ItemEditproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
