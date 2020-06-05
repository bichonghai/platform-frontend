import { TestBed } from '@angular/core/testing';

import { StrengthDynamicLoadRecordService } from './strength-dynamic-load-record.service';

describe('StrengthDynamicLoadRecordService', () => {
  let service: StrengthDynamicLoadRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthDynamicLoadRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
