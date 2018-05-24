/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneForbiddenDrugComponent } from './one-forbidden-drug.component';

describe('OneForbiddenDrugComponent', () => {
  let component: OneForbiddenDrugComponent;
  let fixture: ComponentFixture<OneForbiddenDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneForbiddenDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneForbiddenDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
