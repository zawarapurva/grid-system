import { TestBed } from '@angular/core/testing';

import { YourTeamService } from './your-team.service';

describe('YourTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourTeamService = TestBed.get(YourTeamService);
    expect(service).toBeTruthy();
  });
});
