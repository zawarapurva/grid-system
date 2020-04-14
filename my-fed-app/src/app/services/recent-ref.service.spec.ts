import { TestBed } from '@angular/core/testing';

import { RecentRefService } from './recent-ref.service';

describe('RecentRefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentRefService = TestBed.get(RecentRefService);
    expect(service).toBeTruthy();
  });
});
