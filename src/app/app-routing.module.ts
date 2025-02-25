import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusComponent } from './pages/bus/bus.component';
import { AirComponent } from './pages/air/air.component';
import { ShipComponent } from './pages/ship/ship.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { FlashDealsComponent } from './pages/flash-deals/flash-deals.component';
import { CallComponent } from './pages/call/call.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { FrequentRoutesComponent } from './frequent-routes/frequent-routes.component';
import { LimitedTimeDiscountsComponent } from './limited-time-discounts/limited-time-discounts.component';
import { PopularHotelsComponent } from './popular-hotels/popular-hotels.component';
import { AppPromotionComponent } from './app-promotion/app-promotion.component';
import { PaymentLogosComponent } from './payment-logos/payment-logos.component';
import { PopularRoutesComponent } from './popular-routes/popular-routes.component';
import { BusBookingFormComponent } from './bus-booking-form/bus-booking-form.component';
import { FlightBookingFormComponent } from './flight-booking-form/flight-booking-form.component';
import { ShipBookingFormComponent } from './ship-booking-form/ship-booking-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BusBookingListComponent } from './bus-booking-list/bus-booking-list.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { AirSearchComponent } from './air-search/air-search.component';
import { ShipSearchComponent } from './ship-search/ship-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'bus', component: BusComponent },
  { path: 'air', component: AirComponent },
  { path: 'ship', component: ShipComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'flash-deals', component: FlashDealsComponent },
  { path: 'call', component: CallComponent },
  { path: 'my-booking', component: MyBookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'frequent-routes', component: FrequentRoutesComponent },
  { path: 'limited-time-discounts', component: LimitedTimeDiscountsComponent },
  { path: 'popular-hotels', component: PopularHotelsComponent },
  { path: 'app-promotion', component: AppPromotionComponent },
  { path: 'payment-logos', component: PaymentLogosComponent },
  { path: 'popular-routes', component: PopularRoutesComponent },
  { path: 'bus-booking', component: BusBookingFormComponent },
  { path: 'flight-booking', component: FlightBookingFormComponent },
  { path: 'ship-booking', component: ShipBookingFormComponent },
  { path: 'flightList', component: FlightListComponent },
  { path: 'BusBookingList', component: BusBookingListComponent },
  { path: 'bus-search', component: BusSearchComponent }, // Bus Search Results page
  { path: 'air-search', component: AirSearchComponent }, // Air Search Results page
  { path: 'ship-search', component: ShipSearchComponent }, // Ship Search Results page
  { path: 'hotel-search', component: HotelSearchComponent }, // Hotel Search Results page
  { path: 'hotels', component: HotelListComponent }, // হোটেল লিস্ট পেজ
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'seat-selection', component: SeatSelectionComponent },
  { path: 'booking-summary', component: BookingSummaryComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
