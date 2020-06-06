import { TestBed } from '@angular/core/testing';

import { GaugeRecordService } from './gauge-record.service';

describe('GaugeRecordService', () => {
  let service: GaugeRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaugeRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
