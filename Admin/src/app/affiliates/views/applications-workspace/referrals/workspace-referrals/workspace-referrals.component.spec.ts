import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceReferralsComponent } from './workspace-referrals.component';

describe('WorkspaceReferralsComponent', () => {
  let component: WorkspaceReferralsComponent;
  let fixture: ComponentFixture<WorkspaceReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
