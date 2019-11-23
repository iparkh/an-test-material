import { TestBed } from '@angular/core/testing';

import { BacketService } from './backet.service';

describe('BacketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacketService = TestBed.get(BacketService);
    expect(service).toBeTruthy();
  });
});
