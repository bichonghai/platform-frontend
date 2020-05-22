import { TestBed } from '@angular/core/testing';

import { InstrumentRecordService } from './instrument-record.service';

describe('InstrumentRecordService', () => {
  let service: InstrumentRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
