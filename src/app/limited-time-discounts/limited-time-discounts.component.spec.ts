import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedTimeDiscountsComponent } from './limited-time-discounts.component';

describe('LimitedTimeDiscountsComponent', () => {
  let component: LimitedTimeDiscountsComponent;
  let fixture: ComponentFixture<LimitedTimeDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedTimeDiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitedTimeDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
