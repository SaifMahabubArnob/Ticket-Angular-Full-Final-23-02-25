import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirSearchComponent } from './air-search.component';

describe('AirSearchComponent', () => {
  let component: AirSearchComponent;
  let fixture: ComponentFixture<AirSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
