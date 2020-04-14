import { TestBed } from '@angular/core/testing';

import { ProgressInfoService } from './progress-info.service';

describe('ProgressInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressInfoService = TestBed.get(ProgressInfoService);
    expect(service).toBeTruthy();
  });
});
