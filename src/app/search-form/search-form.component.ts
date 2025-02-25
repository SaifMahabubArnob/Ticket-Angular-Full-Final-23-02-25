import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Router import করো

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  selectedTab: string = 'bus'; // Default selected tab
  fromPlace: string = '';
  toPlace: string = '';
  journeyDate: string = '';
  returnDate: string = '';
  isSubmitted: boolean = false; // Track form submission

  constructor(private router: Router) {} // Router inject করো

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  search() {
    this.isSubmitted = true; // Mark form as submitted
  
    if (this.selectedTab === 'bus') {
      // Check if all required fields are filled
      if (!this.fromPlace || !this.toPlace || !this.journeyDate) {
        alert('Please fill all the required fields for Bus Search!');
        return;
      }
  
      // Navigate to the Bus Search Results page with query parameters
      this.router.navigate(['/bus-search'], {
        queryParams: {
          from: this.fromPlace,
          to: this.toPlace,
          journeyDate: this.journeyDate,
          returnDate: this.returnDate
        }
      });
    } else if (this.selectedTab === 'air') {
      // Check if all required fields are filled
      if (!this.fromPlace || !this.toPlace || !this.journeyDate) {
        alert('Please fill all the required fields for Air Search!');
        return;
      }
  
      // Navigate to the Air Search Results page with query parameters
      this.router.navigate(['/air-search'], {
        queryParams: {
          from: this.fromPlace,
          to: this.toPlace,
          journeyDate: this.journeyDate,
          returnDate: this.returnDate
        }
      });
    } else if (this.selectedTab === 'ship') {
      // Check if all required fields are filled
      if (!this.fromPlace || !this.toPlace || !this.journeyDate) {
        alert('Please fill all the required fields for Ship Search!');
        return;
      }
  
      // Navigate to the Ship Search Results page with query parameters
      this.router.navigate(['/ship-search'], {
        queryParams: {
          from: this.fromPlace,
          to: this.toPlace,
          journeyDate: this.journeyDate,
          returnDate: this.returnDate
        }
      });
    } else if (this.selectedTab === 'hotel') {
      // Check if all required fields are filled
      if (!this.toPlace || !this.journeyDate || !this.returnDate) {
        alert('Please fill all the required fields for Hotel Search!');
        return;
      }
  
      // Navigate to the Hotel Search Results page with query parameters
      this.router.navigate(['/hotel-search'], {
        queryParams: {
          location: this.toPlace,
          checkInDate: this.journeyDate,
          checkOutDate: this.returnDate
        }
      });
    }
  }
}