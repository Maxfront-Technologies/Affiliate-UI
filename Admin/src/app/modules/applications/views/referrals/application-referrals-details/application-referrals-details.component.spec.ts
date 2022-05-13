import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReferralsDetailsComponent } from './application-referrals-details.component';

describe('ApplicationReferralsDetailsComponent', () => {
  let component: ApplicationReferralsDetailsComponent;
  let fixture: ComponentFixture<ApplicationReferralsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationReferralsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReferralsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
