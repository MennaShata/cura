/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PillListingComponent } from './pill-listing.component';

describe('PillListingComponent', () => {
  let component: PillListingComponent;
  let fixture: ComponentFixture<PillListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
