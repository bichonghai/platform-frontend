import { TestBed } from '@angular/core/testing';

import { StrengthStaticLoadRecordService } from './strength-static-load-record.service';

describe('StrengthStaticLoadRecordService', () => {
  let service: StrengthStaticLoadRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthStaticLoadRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
