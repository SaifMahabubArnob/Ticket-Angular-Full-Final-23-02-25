import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen = true; // শুরুতে Sidebar খোলা থাকবে

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
