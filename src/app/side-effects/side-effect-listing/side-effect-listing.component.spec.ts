/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideEffectListingComponent } from './side-effect-listing.component';

describe('SideEffectListingComponent', () => {
  let component: SideEffectListingComponent;
  let fixture: ComponentFixture<SideEffectListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideEffectListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
