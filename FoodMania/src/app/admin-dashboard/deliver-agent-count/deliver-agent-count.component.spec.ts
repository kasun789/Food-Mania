import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverAgentCountComponent } from './deliver-agent-count.component';

describe('DeliverAgentCountComponent', () => {
  let component: DeliverAgentCountComponent;
  let fixture: ComponentFixture<DeliverAgentCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverAgentCountComponent]
    });
    fixture = TestBed.createComponent(DeliverAgentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
