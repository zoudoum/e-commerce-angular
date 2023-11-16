import { TestBed } from '@angular/core/testing';

import { MyEmailServiceService } from './my-email-service.service';

describe('MyEmailServiceService', () => {
  let service: MyEmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEmailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
