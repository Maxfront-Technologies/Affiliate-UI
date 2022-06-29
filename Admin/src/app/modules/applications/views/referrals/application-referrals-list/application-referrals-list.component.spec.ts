import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReferralsListComponent } from './application-referrals-list.component';

describe('ApplicationReferralsListComponent', () => {
  let component: ApplicationReferralsListComponent;
  let fixture: ComponentFixture<ApplicationReferralsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationReferralsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationReferralsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
