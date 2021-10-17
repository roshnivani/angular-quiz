import { TestBed } from '@angular/core/testing';

import { SuperAdminserviceService } from './super-adminservice.service';

describe('SuperAdminserviceService', () => {
  let service: SuperAdminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdminserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
