import { TestBed } from '@angular/core/testing';

import { RepertorioService } from './repertorio.service';

describe('RepertorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepertorioService = TestBed.get(RepertorioService);
    expect(service).toBeTruthy();
  });
});
