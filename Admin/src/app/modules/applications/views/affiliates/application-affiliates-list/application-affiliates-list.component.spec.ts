import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAffiliatesListComponent } from './application-affiliates-list.component';

describe('ApplicationAffiliatesListComponent', () => {
  let component: ApplicationAffiliatesListComponent;
  let fixture: ComponentFixture<ApplicationAffiliatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAffiliatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAffiliatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
