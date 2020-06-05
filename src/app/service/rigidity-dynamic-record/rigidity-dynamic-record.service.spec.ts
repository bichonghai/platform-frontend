import { TestBed } from '@angular/core/testing';

import { RigidityDynamicRecordService } from './rigidity-dynamic-record.service';

describe('RigidityDynamicRecordService', () => {
  let service: RigidityDynamicRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RigidityDynamicRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
