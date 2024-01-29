import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CardComponent, NavComponent, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
