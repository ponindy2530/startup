import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchlistComponent } from './item-searchlist.component';

describe('ItemSearchlistComponent', () => {
  let component: ItemSearchlistComponent;
  let fixture: ComponentFixture<ItemSearchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSearchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
