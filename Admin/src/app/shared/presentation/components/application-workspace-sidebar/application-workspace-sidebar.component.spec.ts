import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWorkspaceSidebarComponent } from './application-workspace-sidebar.component';

describe('ApplicationWorkspaceSidebarComponent', () => {
  let component: ApplicationWorkspaceSidebarComponent;
  let fixture: ComponentFixture<ApplicationWorkspaceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationWorkspaceSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationWorkspaceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
