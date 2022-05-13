import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsWorkspaceSidebarComponent } from './applications-workspace-sidebar.component';

describe('ApplicationsWorkspaceSidebarComponent', () => {
  let component: ApplicationsWorkspaceSidebarComponent;
  let fixture: ComponentFixture<ApplicationsWorkspaceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsWorkspaceSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsWorkspaceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
