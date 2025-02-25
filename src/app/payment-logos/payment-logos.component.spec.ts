import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLogosComponent } from './payment-logos.component';

describe('PaymentLogosComponent', () => {
  let component: PaymentLogosComponent;
  let fixture: ComponentFixture<PaymentLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
