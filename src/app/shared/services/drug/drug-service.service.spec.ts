/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrugServiceService } from './drug-service.service';

describe('Service: DrugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugServiceService]
    });
  });

  it('should ...', inject([DrugServiceService], (service: DrugServiceService) => {
    expect(service).toBeTruthy();
  }));
});
