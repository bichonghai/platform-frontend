import { TestBed } from '@angular/core/testing';

import { HeightGaugeRecordService } from './height-gauge-record.service';

describe('HeightGaugeRecordService', () => {
  let service: HeightGaugeRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeightGaugeRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
