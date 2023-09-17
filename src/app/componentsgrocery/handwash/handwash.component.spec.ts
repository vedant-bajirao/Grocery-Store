import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashComponent } from './handwash.component';

describe('HandwashComponent', () => {
  let component: HandwashComponent;
  let fixture: ComponentFixture<HandwashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandwashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
