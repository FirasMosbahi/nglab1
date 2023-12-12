import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrategyService } from '../app/services/custom-preload-strategy.service';

describe('CustomPreloadStrategyService', () => {
  let service: CustomPreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
