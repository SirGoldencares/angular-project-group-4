import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

// Unit test suite for the CardComponent
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  // This sets up the testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // This tests to ensure that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
