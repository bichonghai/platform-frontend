import { TestBed } from '@angular/core/testing';

import { DeviceRecordService } from './device-record.service';

describe('DeviceRecordService', () => {
  let service: DeviceRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
