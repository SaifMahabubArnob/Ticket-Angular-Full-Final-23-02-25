import { Component } from '@angular/core';

@Component({
  selector: 'app-ship-booking-form',
  templateUrl: './ship-booking-form.component.html',
  styleUrls: ['./ship-booking-form.component.css']
})
export class ShipBookingFormComponent {
  ships = [
    {
      name: "KEARI TOURS AND SERVICES LTD",
      start: "Nunia chora, BIWTA Ghat (Cox's Bazar)",
      end: "Saint Martin",
      departure: "7:00 AM",
      arrival: "12:00 PM",
      seats: -7,
      price: 1150
    },
    {
      name: "SONARGAON TOURISM",
      start: "Nunia chora, BIWTA Ghat (Cox's Bazar)",
      end: "Saint Martin",
      departure: "7:00 AM",
      arrival: "2:00 PM",
      seats: 55,
      price: 1500
    },
    {
      name: "The Atlantic Cruise",
      details: "ATLANTIC CRUISE (COX-SAINT) Ac",
      start: "Nunia chora, BIWTA Ghat (Cox's Bazar)",
      end: "Saint Martin",
      departure: "7:00 AM",
      arrival: "2:00 PM",
      seats: 55,
      price: 1500
    },
    {
      name: "Karnafuly Cruise Line",
      details: "BARO AWLIA (COX-SAINT)-N Ac",
      start: "Bangladesh Navy Inani Jetty Ghat (Karnafuly)",
      end: "Saint Martin",
      departure: "7:00 AM",
      arrival: "2:00 PM",
      seats: 55,
      price: 20000
    },
    {
      name: "KEARI TOURS AND SERVICES LTD",
      start: "Nunia chora, BIWTA Ghat (Cox's Bazar)",
      end: "Saint Martin",
      departure: "7:00 AM",
      arrival: "12:00 PM",
      seats: 226,
      price: 1250
    }
  ];
}
