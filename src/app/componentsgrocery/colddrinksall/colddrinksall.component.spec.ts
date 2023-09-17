import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColddrinksallComponent } from './colddrinksall.component';

describe('ColddrinksallComponent', () => {
  let component: ColddrinksallComponent;
  let fixture: ComponentFixture<ColddrinksallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColddrinksallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColddrinksallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
