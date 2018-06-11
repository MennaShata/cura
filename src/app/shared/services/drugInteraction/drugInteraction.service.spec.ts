/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrugInteractionService } from './drugInteraction.service';

describe('Service: DrugInteraction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugInteractionService]
    });
  });

  it('should ...', inject([DrugInteractionService], (service: DrugInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
