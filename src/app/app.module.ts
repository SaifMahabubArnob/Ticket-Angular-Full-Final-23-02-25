import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusComponent } from './pages/bus/bus.component';
import { AirComponent } from './pages/air/air.component';
import { ShipComponent } from './pages/ship/ship.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { FlashDealsComponent } from './pages/flash-deals/flash-deals.component';
import { CallComponent } from './pages/call/call.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FrequentRoutesComponent } from './frequent-routes/frequent-routes.component';
import { LimitedTimeDiscountsComponent } from './limited-time-discounts/limited-time-discounts.component';
import { PopularHotelsComponent } from './popular-hotels/popular-hotels.component';
import { AppPromotionComponent } from './app-promotion/app-promotion.component';
import { PaymentLogosComponent } from './payment-logos/payment-logos.component';
import { PopularRoutesComponent } from './popular-routes/popular-routes.component';
import { BusBookingFormComponent } from './bus-booking-form/bus-booking-form.component'
import { ShipBookingFormComponent } from './ship-booking-form/ship-booking-form.component';
import { FlightBookingFormComponent } from './flight-booking-form/flight-booking-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BusBookingListComponent } from './bus-booking-list/bus-booking-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { AirSearchComponent } from './air-search/air-search.component';
import { ShipSearchComponent } from './ship-search/ship-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    BusComponent,
    AirComponent,
    ShipComponent,
    HotelComponent,
    FlashDealsComponent,
    CallComponent,
    MyBookingComponent,
    LoginComponent,
    SignupComponent,
    FrequentRoutesComponent,
    LimitedTimeDiscountsComponent,
    PopularHotelsComponent,
    AppPromotionComponent,
    PaymentLogosComponent,
    PopularRoutesComponent,
    BusBookingFormComponent,
    ShipBookingFormComponent,
    FlightBookingFormComponent,
    SearchFormComponent,
    FlightListComponent,
    BusBookingListComponent,
    SidebarComponent,
    BusSearchComponent,
    AirSearchComponent,
    ShipSearchComponent,
    HotelSearchComponent,
    HotelListComponent,
    HotelDetailComponent,
    BookingFormComponent,
    SeatSelectionComponent,
    BookingSummaryComponent,
    AdminPanelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
