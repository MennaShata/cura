/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrugTypeService } from './drug-type.service';

describe('Service: DrugType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugTypeService]
    });
  });

  it('should ...', inject([DrugTypeService], (service: DrugTypeService) => {
    expect(service).toBeTruthy();
  }));
});
