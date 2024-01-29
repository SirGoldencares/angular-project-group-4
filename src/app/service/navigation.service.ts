import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router:Router) { }
  goToHome (){
    this.router.navigate([''])
  }

  goToUsers(){
    this.router.navigate(['/users'])
  }

}
