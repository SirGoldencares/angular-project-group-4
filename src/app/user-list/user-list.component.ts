import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { NavComponent } from '../nav/nav.component';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [NavComponent, FormsModule, CardComponent],
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Array to store all user objects
  filteredUsers: User[] = []; // Array to store filtered user objects based on search
  filterOptions = { name: true, email: true }; // Object to control filter options for name and email

  // Constructor to inject the UserService
  constructor(private userService: UserService) {}

  // ngOnInit lifecycle hook to load users when the component is initialized
  ngOnInit() {
    // Fetch all users from the UserService
    this.userService.getUsers().subscribe((users) => {
      this.users = users; // Store the fetched users
      this.filteredUsers = this.users; // Initially, all users are shown, so filteredUsers is the same as users
    });
  }

  // Method to initiate filtering of users based on search criteria
  search() {
    this.applyFilter(); // Call applyFilter method to filter users
  }

  // Method to filter users based on the search term and selected filter options
  applyFilter() {
    // Retrieve the search term from the input field and convert it to lowercase for case-insensitive comparison
    const searchTerm = (
      document.getElementById('user') as HTMLInputElement
    ).value.toLowerCase();

    // Filter the users array based on the search term and update filteredUsers
    this.filteredUsers = this.users.filter((user) => {
      return (
        (this.filterOptions.name &&
          user.name.toLowerCase().includes(searchTerm)) ||
        (this.filterOptions.email &&
          user.email.toLowerCase().includes(searchTerm))
      );
    });
  }

  // Method to toggle the display of the filter options dropdown
  filterToggle() {
    // Toggle the 'show' class on the dropdown content to show/hide it
    document.querySelector('.dropdown-content')?.classList.toggle('show');
  }
}
