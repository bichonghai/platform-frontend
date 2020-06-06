import { TestBed } from '@angular/core/testing';

import { InclinationRecordService } from './inclination-record.service';

describe('InclinationRecordService', () => {
  let service: InclinationRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinationRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
