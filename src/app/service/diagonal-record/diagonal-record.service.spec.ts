import { TestBed } from '@angular/core/testing';

import { DiagonalRecordService } from './diagonal-record.service';

describe('DiagonalRecordService', () => {
  let service: DiagonalRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagonalRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
