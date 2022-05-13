import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceAffliatesComponent } from './workspace-affliates.component';

describe('WorkspaceAffliatesComponent', () => {
  let component: WorkspaceAffliatesComponent;
  let fixture: ComponentFixture<WorkspaceAffliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceAffliatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceAffliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
