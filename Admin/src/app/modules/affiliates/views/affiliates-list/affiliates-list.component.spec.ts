import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesListComponent } from './affiliates-list.component';

describe('AffiliatesListComponent', () => {
  let component: AffiliatesListComponent;
  let fixture: ComponentFixture<AffiliatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
