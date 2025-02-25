import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingFormComponent } from './flight-booking-form.component';

describe('FlightBookingFormComponent', () => {
  let component: FlightBookingFormComponent;
  let fixture: ComponentFixture<FlightBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBookingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
