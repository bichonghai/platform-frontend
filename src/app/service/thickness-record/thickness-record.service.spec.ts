import { TestBed } from '@angular/core/testing';

import { ThicknessRecordService } from './thickness-record.service';

describe('ThicknessRecordService', () => {
  let service: ThicknessRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThicknessRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
