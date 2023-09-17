import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitallComponent } from './biscuitall.component';

describe('BiscuitallComponent', () => {
  let component: BiscuitallComponent;
  let fixture: ComponentFixture<BiscuitallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiscuitallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiscuitallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
