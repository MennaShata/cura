/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodInteractionCarouselListingComponent } from './food-interaction-carousel-listing.component';

describe('FoodInteractionCarouselListingComponent', () => {
  let component: FoodInteractionCarouselListingComponent;
  let fixture: ComponentFixture<FoodInteractionCarouselListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInteractionCarouselListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodInteractionCarouselListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
