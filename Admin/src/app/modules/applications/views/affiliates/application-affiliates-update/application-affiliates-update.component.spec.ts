import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAffiliatesUpdateComponent } from './application-affiliates-update.component';

describe('ApplicationAffiliatesUpdateComponent', () => {
  let component: ApplicationAffiliatesUpdateComponent;
  let fixture: ComponentFixture<ApplicationAffiliatesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAffiliatesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAffiliatesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
