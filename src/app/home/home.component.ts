import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ICourses } from '../models/courses/courses';
import { COURSES } from '../../coursesdata';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
courses:ICourses[]=COURSES;
}
