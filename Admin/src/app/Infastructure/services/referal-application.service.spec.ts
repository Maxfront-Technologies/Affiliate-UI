import { TestBed } from '@angular/core/testing';

import { ReferalApplicationService } from './referal-application.service';

describe('ReferalApplicationService', () => {
  let service: ReferalApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferalApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
