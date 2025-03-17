import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistsComponent } from './itemlists.component';

describe('ItemlistsComponent', () => {
  let component: ItemlistsComponent;
  let fixture: ComponentFixture<ItemlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemlistsComponent]
    });
    fixture = TestBed.createComponent(ItemlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
