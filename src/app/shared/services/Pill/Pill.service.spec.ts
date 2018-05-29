/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PillService } from './Pill.service';

describe('Service: Pill', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PillService]
    });
  });

  it('should ...', inject([PillService], (service: PillService) => {
    expect(service).toBeTruthy();
  }));
});
