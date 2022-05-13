import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsWorkspaceComponent } from './applications-workspace.component';

describe('ApplicationsWorkspaceComponent', () => {
  let component: ApplicationsWorkspaceComponent;
  let fixture: ComponentFixture<ApplicationsWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
