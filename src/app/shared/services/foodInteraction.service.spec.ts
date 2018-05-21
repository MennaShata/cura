/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodInteractionService } from './foodInteraction.service';

describe('Service: FoodInteraction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodInteractionService]
    });
  });

  it('should ...', inject([FoodInteractionService], (service: FoodInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
