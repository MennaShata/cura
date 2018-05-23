/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiseaseServiceService } from './disease-service.service';

describe('Service: DiseaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiseaseServiceService]
    });
  });

  it('should ...', inject([DiseaseServiceService], (service: DiseaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
