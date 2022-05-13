import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceReportsComponent } from './workspace-reports.component';

describe('WorkspaceReportsComponent', () => {
  let component: WorkspaceReportsComponent;
  let fixture: ComponentFixture<WorkspaceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
