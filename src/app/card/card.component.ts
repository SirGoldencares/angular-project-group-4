import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  users:User[] =[];

 

  constructor (private userService:UserService){};

  ngOnInit():void{
    this.userService.getUsers().subscribe(users=> this.users = users);
  }
}
