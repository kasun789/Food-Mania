import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCountComponent } from './meals-count.component';

describe('MealsCountComponent', () => {
  let component: MealsCountComponent;
  let fixture: ComponentFixture<MealsCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsCountComponent]
    });
    fixture = TestBed.createComponent(MealsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
