import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

//Test suite for UserListComponent
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  //This sets up the test environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //This tests to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
