import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsDetailsComponent } from './referrals-details.component';

describe('ReferralsDetailsComponent', () => {
  let component: ReferralsDetailsComponent;
  let fixture: ComponentFixture<ReferralsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
