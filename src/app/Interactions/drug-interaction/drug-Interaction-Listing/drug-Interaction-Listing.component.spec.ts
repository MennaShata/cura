/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrugInteractionListingComponent } from './drug-Interaction-Listing.component';

describe('DrugInteractionListingComponent', () => {
  let component: DrugInteractionListingComponent;
  let fixture: ComponentFixture<DrugInteractionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugInteractionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInteractionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
