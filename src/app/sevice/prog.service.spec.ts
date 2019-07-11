import { TestBed } from '@angular/core/testing';

import { ProgService } from './prog.service';

describe('ProgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgService = TestBed.get(ProgService);
    expect(service).toBeTruthy();
  });
});
