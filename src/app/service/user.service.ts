import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const httpOptions  ={
  headers: new HttpHeaders({'Content-Type': 'application-json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${BASE_URL}/users`, httpOptions)
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/users/${userId}`, httpOptions);
  }
}
