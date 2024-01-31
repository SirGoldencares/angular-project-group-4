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
  imports: [NavComponent, FormsModule, CardComponent]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  filterOptions = { name: true, email: true };
 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = this.users;
    });
  }

  search() {
    this.applyFilter();
  }

  applyFilter() {
    const searchTerm = (document.getElementById('user') as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user => {
      return (this.filterOptions.name && user.name.toLowerCase().includes(searchTerm)) ||
             (this.filterOptions.email && user.email.toLowerCase().includes(searchTerm));
    });
  }

 filterToggle(){
  document.querySelector('.dropdown-content')?.classList.toggle('show')
 }
  
}
