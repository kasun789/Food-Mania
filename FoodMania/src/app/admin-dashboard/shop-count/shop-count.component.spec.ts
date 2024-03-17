import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCountComponent } from './shop-count.component';

describe('ShopCountComponent', () => {
  let component: ShopCountComponent;
  let fixture: ComponentFixture<ShopCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCountComponent]
    });
    fixture = TestBed.createComponent(ShopCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
