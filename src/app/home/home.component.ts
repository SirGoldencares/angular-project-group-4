import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { COMPETENCIES } from '../../competencies';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../service/navigation.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CommonModule, FormsModule, RouterOutlet], //Imports Angular modules
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private navigationService: NavigationService) {}
  courses: any[] = COMPETENCIES;

  // This method handles navigation to the Users page, preventing the default behavior of the event
  navigateToUsers(event: Event) {
    event.preventDefault();
    this.navigationService.goToUsers();
  }
}
