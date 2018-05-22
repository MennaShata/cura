/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideeffectService } from './sideeffect.service';

describe('Service: Sideeffect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideeffectService]
    });
  });

  it('should ...', inject([SideeffectService], (service: SideeffectService) => {
    expect(service).toBeTruthy();
  }));
});
