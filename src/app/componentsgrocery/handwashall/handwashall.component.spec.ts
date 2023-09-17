import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashallComponent } from './handwashall.component';

describe('HandwashallComponent', () => {
  let component: HandwashallComponent;
  let fixture: ComponentFixture<HandwashallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandwashallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
