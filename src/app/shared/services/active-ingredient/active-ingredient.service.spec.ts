/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiveIngredientService } from './active-ingredient.service';

describe('Service: ActiveIngredient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveIngredientService]
    });
  });

  it('should ...', inject([ActiveIngredientService], (service: ActiveIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
