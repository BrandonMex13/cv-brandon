import { TestBed } from '@angular/core/testing';

import { CvRoutingResolver } from './cv-routing.resolver';

describe('CvRoutingResolver', () => {
  let resolver: CvRoutingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CvRoutingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
