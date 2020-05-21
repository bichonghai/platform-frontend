import { TestBed } from '@angular/core/testing';

import { ServicePathService } from './service-path.service';

describe('ServicePathService', () => {
  let service: ServicePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
