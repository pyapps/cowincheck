import { TestBed } from '@angular/core/testing';

import { cowincheckService } from './cowincheck.service';

describe('cowincheckService', () => {
  let service: cowincheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cowincheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
