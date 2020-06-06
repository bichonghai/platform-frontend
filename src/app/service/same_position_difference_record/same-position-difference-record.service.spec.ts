import { TestBed } from '@angular/core/testing';

import { SamePositionDifferenceRecordService } from './same-position-difference-record.service';

describe('SamePositionDifferenceRecordService', () => {
  let service: SamePositionDifferenceRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamePositionDifferenceRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
