import { TestBed } from '@angular/core/testing';

import { ReferalsService } from './referals.service';

describe('ReferalsService', () => {
  let service: ReferalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
