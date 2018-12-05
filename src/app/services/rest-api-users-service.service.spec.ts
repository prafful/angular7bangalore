import { TestBed } from '@angular/core/testing';

import { RestApiUsersServiceService } from './rest-api-users-service.service';

describe('RestApiUsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiUsersServiceService = TestBed.get(RestApiUsersServiceService);
    expect(service).toBeTruthy();
  });
});
