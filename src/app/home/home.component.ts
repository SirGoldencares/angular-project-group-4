import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ICourses } from '../models/courses/courses';
import { COURSES } from '../../coursesdata';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../service/navigation.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private navigationService: NavigationService) {}
  courses: ICourses[] = COURSES;

  navigateToUsers(event: Event) {
    event.preventDefault();
    this.navigationService.goToUsers();
  }
}
