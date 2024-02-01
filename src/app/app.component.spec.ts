// Angular testing utilities for configuring and creating TestBed instances
import { TestBed } from '@angular/core/testing';

// Imports the AppComponent to be tested
import { AppComponent } from './app.component';

// Unit test suite for the AppComponent
describe('AppComponent', () => {
  
  // This sets up the testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import the AppComponent for the test configuration
    }).compileComponents(); // Compile the component and its template
  });

  //This tests to ensure that the AppComponent is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //This tests to ensure that the AppComponent has the correct title
  it(`should have the 'user-data-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('user-data-app');
  });

  // This tests to ensure that the title is rendered in the AppComponent
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, user-data-app');
  });
});
