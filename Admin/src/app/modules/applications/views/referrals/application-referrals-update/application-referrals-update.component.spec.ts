import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReferralsUpdateComponent } from './application-referrals-update.component';

describe('ApplicationReferralsUpdateComponent', () => {
  let component: ApplicationReferralsUpdateComponent;
  let fixture: ComponentFixture<ApplicationReferralsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationReferralsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReferralsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
