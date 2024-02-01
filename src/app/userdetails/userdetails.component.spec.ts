import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsComponent } from './userdetails.component';

//Test suite for UserdetailsComponent
describe('UserdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;

  //This sets up the test environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //This tests to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
