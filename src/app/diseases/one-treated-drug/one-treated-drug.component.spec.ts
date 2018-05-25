/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneTreatedDrugComponent } from './one-treated-drug.component';

describe('OneTreatedDrugComponent', () => {
  let component: OneTreatedDrugComponent;
  let fixture: ComponentFixture<OneTreatedDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTreatedDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTreatedDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
