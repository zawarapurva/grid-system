import { TestBed } from '@angular/core/testing';

import { YourCardService } from './your-card.service';

describe('YourCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourCardService = TestBed.get(YourCardService);
    expect(service).toBeTruthy();
  });
});
