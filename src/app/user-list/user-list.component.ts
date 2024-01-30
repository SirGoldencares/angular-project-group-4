import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CardComponent, NavComponent, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private userService: UserService) {  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users; // Update filteredUsers here
    });
  }

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm) ||
             user.email.toLowerCase().includes(searchTerm);
    });
  }
}
