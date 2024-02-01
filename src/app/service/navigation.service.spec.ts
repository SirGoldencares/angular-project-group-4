import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

//Unit test suite for NavigationService
describe('NavigationService', () => {
  let service: NavigationService;

  //This sets up test environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  // This tests to ensure that the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
