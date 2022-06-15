import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsEditComponent } from './referrals-edit.component';

describe('ReferralsEditComponent', () => {
  let component: ReferralsEditComponent;
  let fixture: ComponentFixture<ReferralsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
