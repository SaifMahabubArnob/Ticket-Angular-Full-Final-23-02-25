import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentRoutesComponent } from './frequent-routes.component';

describe('FrequentRoutesComponent', () => {
  let component: FrequentRoutesComponent;
  let fixture: ComponentFixture<FrequentRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
