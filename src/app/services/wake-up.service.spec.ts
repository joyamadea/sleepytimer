import { TestBed } from '@angular/core/testing';

import { WakeUpService } from './wake-up.service';

describe('WakeUpService', () => {
  let service: WakeUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WakeUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
