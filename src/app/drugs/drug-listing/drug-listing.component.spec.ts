/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrugListingComponent } from './drug-listing.component';

describe('DrugListingComponent', () => {
  let component: DrugListingComponent;
  let fixture: ComponentFixture<DrugListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
