import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

//Unit test suite for UserService
describe('UserService', () => {
  let service: UserService;

  //This sets up the test environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  //This tests to ensure that the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
