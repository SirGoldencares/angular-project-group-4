import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

//Unit test suite for the HomeComponent
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // This sets up the testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // This tests to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
