import { TestBed } from '@angular/core/testing';

import { MajorTomService } from './major-tom.service';

describe('MajorTomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MajorTomService = TestBed.get(MajorTomService);
    expect(service).toBeTruthy();
  });
});
