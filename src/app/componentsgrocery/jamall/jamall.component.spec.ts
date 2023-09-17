import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamallComponent } from './jamall.component';

describe('JamallComponent', () => {
  let component: JamallComponent;
  let fixture: ComponentFixture<JamallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
