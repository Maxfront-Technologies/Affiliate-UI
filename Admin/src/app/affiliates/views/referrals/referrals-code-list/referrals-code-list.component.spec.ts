import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsCodeListComponent } from './referrals-code-list.component';

describe('ReferralsCodeListComponent', () => {
  let component: ReferralsCodeListComponent;
  let fixture: ComponentFixture<ReferralsCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
