import { Component,Input } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';


// Component decorator for the card component
@Component({
  selector: 'app-card',
  standalone: true, // Indicates that this component can function independently
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule], //Imports modules
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

//Receives the data from its parent component and renders it
export class CardComponent{
  @Input() users:User[] = [];
}
