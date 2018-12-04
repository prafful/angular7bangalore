import { TestBed } from '@angular/core/testing';

import { LocalService1Service } from './local-service1.service';

describe('LocalService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalService1Service = TestBed.get(LocalService1Service);
    expect(service).toBeTruthy();
  });
});
