import { TestBed } from '@angular/core/testing';

import { ClickBouttonService } from './click-boutton.service';

describe('ClickBouttonService', () => {
  let service: ClickBouttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickBouttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
