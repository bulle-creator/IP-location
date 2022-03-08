import { TestBed } from '@angular/core/testing';

import { LookipService } from './lookip.service';

describe('LookipService', () => {
  let service: LookipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
