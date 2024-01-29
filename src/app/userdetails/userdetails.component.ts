import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  userId: number = 0;
  user: User|undefined

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      this.getUserDetails();
    });
  }

  getUserDetails(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

}
