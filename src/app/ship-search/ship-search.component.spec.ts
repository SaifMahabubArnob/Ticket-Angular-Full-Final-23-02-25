import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSearchComponent } from './ship-search.component';

describe('ShipSearchComponent', () => {
  let component: ShipSearchComponent;
  let fixture: ComponentFixture<ShipSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
