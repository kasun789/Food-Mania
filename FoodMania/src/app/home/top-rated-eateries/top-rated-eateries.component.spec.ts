import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedEateriesComponent } from './top-rated-eateries.component';

describe('TopRatedEateriesComponent', () => {
  let component: TopRatedEateriesComponent;
  let fixture: ComponentFixture<TopRatedEateriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedEateriesComponent]
    });
    fixture = TestBed.createComponent(TopRatedEateriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
