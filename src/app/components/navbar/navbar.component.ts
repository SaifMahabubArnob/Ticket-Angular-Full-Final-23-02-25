// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   isBusFormVisible: boolean = false;
//   isFlightFormVisible: boolean = false;
//   isShipFormVisible: boolean = false; // Ship Booking Form এর জন্য নতুন ভেরিয়েবল




  
//   // Function to toggle visibility of forms
//   showForm(formType: string) {
//     this.isBusFormVisible = (formType === 'bus') ? !this.isBusFormVisible : false;
//     this.isFlightFormVisible = (formType === 'air') ? !this.isFlightFormVisible : false;
//     this.isShipFormVisible = (formType === 'ship') ? !this.isShipFormVisible : false; // Ship Form এর জন্য কন্ডিশন
    
//   }
// }












// frontend/src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isBusFormVisible: boolean = false;
  isFlightFormVisible: boolean = false;
  isShipFormVisible: boolean = false; // Ship Booking Form এর জন্য নতুন ভেরিয়েবল
  isHotelFormVisible: boolean = false; // Hotel Booking Form এর জন্য নতুন ভেরিয়েবল

  // Function to toggle visibility of forms
  showForm(formType: string) {
    this.isBusFormVisible = (formType === 'bus') ? !this.isBusFormVisible : false;
    this.isFlightFormVisible = (formType === 'air') ? !this.isFlightFormVisible : false;
    this.isShipFormVisible = (formType === 'ship') ? !this.isShipFormVisible : false; // Ship Form এর জন্য কন্ডিশন
    this.isHotelFormVisible = (formType === 'hotel') ? !this.isHotelFormVisible : false; // Hotel Form এর জন্য কন্ডিশন
  }
}