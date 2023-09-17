import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceallComponent } from './riceall.component';

describe('RiceallComponent', () => {
  let component: RiceallComponent;
  let fixture: ComponentFixture<RiceallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
