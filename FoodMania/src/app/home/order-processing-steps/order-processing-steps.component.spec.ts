import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProcessingStepsComponent } from './order-processing-steps.component';

describe('OrderProcessingStepsComponent', () => {
  let component: OrderProcessingStepsComponent;
  let fixture: ComponentFixture<OrderProcessingStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderProcessingStepsComponent]
    });
    fixture = TestBed.createComponent(OrderProcessingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
