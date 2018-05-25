/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForbiddenDrugsComponent } from './forbidden-drugs.component';

describe('ForbiddenDrugsComponent', () => {
  let component: ForbiddenDrugsComponent;
  let fixture: ComponentFixture<ForbiddenDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
