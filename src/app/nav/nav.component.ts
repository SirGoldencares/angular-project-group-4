import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private navigationService: NavigationService) {}

  navigateToUsers(event: Event) {
    event.preventDefault();
    this.navigationService.goToUsers();
  }

  navigateToHome(event:Event) {
    event.preventDefault();
    this.navigationService.goToHome();
  }

}
