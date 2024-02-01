// Import necessary Angular core decorators and router functionality
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from '../service/navigation.service';

// Decorator function that specifies the Angular metadata for the component
@Component({
  selector: 'app-nav', // The custom HTML tag to represent this component
  standalone: true, // Indicates that this component is standalone, meaning it can be used without being declared in an NgModule
  imports: [RouterOutlet], // Imports RouterOutlet, allowing for router views to be included within this component's template, if necessary
  templateUrl: './nav.component.html', // The path to the HTML file that contains the component's template
  styleUrl: './nav.component.css', // The path to the CSS file that styles this component
})
export class NavComponent {
  // Constructor to inject the NavigationService
  constructor(private navigationService: NavigationService) {}

  // Method to handle navigation to the "Users" page
  navigateToUsers(event: Event) {
    event.preventDefault(); // Prevents the default link behavior
    this.navigationService.goToUsers(); // Calls the navigation service to navigate to the Users page
  }

  // Method to handle navigation to the "Home" page
  navigateToHome(event: Event) {
    event.preventDefault(); // Prevents the default link behavior
    this.navigationService.goToHome(); // Calls the navigation service to navigate to the Home page
  }
}
