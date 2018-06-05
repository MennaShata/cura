/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommunityServiceService } from './community-service.service';

describe('Service: CommunityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunityServiceService]
    });
  });

  it('should ...', inject([CommunityServiceService], (service: CommunityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
