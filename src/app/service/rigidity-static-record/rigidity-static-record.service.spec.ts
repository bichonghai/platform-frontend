import { TestBed } from '@angular/core/testing';

import { RigidityStaticRecordService } from './rigidity-static-record.service';

describe('RigidityStaticRecordService', () => {
  let service: RigidityStaticRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RigidityStaticRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
