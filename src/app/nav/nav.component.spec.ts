import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

//Unit test suite for the NavComponent
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  // This sets up the testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // This tests to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
