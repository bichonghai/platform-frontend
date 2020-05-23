import { TestBed } from '@angular/core/testing';

import { ThicknessSectionPositionService } from './thickness-section-position.service';

describe('ThicknessSectionPositionService', () => {
  let service: ThicknessSectionPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThicknessSectionPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
