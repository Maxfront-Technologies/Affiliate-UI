import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAffiliatesDetailsComponent } from './application-affiliates-details.component';

describe('ApplicationAffiliatesDetailsComponent', () => {
  let component: ApplicationAffiliatesDetailsComponent;
  let fixture: ComponentFixture<ApplicationAffiliatesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAffiliatesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAffiliatesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
