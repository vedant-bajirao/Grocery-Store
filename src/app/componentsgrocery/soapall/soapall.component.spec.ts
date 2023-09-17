import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapallComponent } from './soapall.component';

describe('SoapallComponent', () => {
  let component: SoapallComponent;
  let fixture: ComponentFixture<SoapallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
