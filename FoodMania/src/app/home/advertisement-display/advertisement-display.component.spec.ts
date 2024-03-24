import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiesmentDisplayComponent } from './advertisement-display.component';

describe('AdvertiesmentDisplayComponent', () => {
  let component: AdvertiesmentDisplayComponent;
  let fixture: ComponentFixture<AdvertiesmentDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertiesmentDisplayComponent]
    });
    fixture = TestBed.createComponent(AdvertiesmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
