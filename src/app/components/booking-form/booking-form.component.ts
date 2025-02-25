// frontend/src/app/components/booking-form/booking-form.component.ts
import { Component, Input } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  @Input() hotelId!: number;
  message: string = '';

  constructor(private hotelService: HotelService) {}

  bookRoom(): void {
    this.hotelService.bookRoom(this.hotelId).subscribe((response) => {
      this.message = response;
    });
  }
}