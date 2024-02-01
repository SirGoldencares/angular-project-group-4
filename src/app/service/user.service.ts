// Import necessary Angular modules and RxJS Observable
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// Define the base URL for the API endpoint
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Define HTTP options to include in each request, setting the 'Content-Type' header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json' }),
};

// Decorator marks this class as available to be provided and injected as a dependency
@Injectable({
  providedIn: 'root', // Specifies that this service should be provided in the root injector
})
export class UserService {
  // Inject HttpClient service into our service to enable HTTP requests
  constructor(private http: HttpClient) {}

  // Method to retrieve all users from the API
  // Returns an Observable of User array, allowing subscription to the response
  getUsers(): Observable<User[]> {
    // Use HttpClient to send a GET request to the API endpoint for users
    // The response is expected to be an array of User objects
    return this.http.get<User[]>(`${BASE_URL}/users`, httpOptions);
  }

  // Method to retrieve a single user by their ID from the API
  // Accepts userId as a parameter to specify which user to fetch
  // Returns an Observable of User, allowing subscription to the response
  getUserById(userId: number): Observable<User> {
    // Use HttpClient to send a GET request to the API endpoint for a specific user by ID
    // The response is expected to be a User object
    return this.http.get<User>(`${BASE_URL}/users/${userId}`, httpOptions);
  }
}
