import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSLoginComponent } from './smslogin.component';

describe('SMSLoginComponent', () => {
  let component: SMSLoginComponent;
  let fixture: ComponentFixture<SMSLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMSLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMSLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
