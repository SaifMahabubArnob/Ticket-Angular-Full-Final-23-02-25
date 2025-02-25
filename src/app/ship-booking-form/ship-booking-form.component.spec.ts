import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipBookingFormComponent } from './ship-booking-form.component';

describe('ShipBookingFormComponent', () => {
  let component: ShipBookingFormComponent;
  let fixture: ComponentFixture<ShipBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipBookingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
