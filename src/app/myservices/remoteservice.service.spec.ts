import { TestBed, inject } from '@angular/core/testing';

import { remoteserviceService } from './remoteservice.service';

describe('Myservices\remoteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [remoteserviceService]
    });
  });

  it('should be created', inject([remoteserviceService], (service: remoteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
