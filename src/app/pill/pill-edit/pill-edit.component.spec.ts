/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PillEditComponent } from './pill-edit.component';

describe('PillEditComponent', () => {
  let component: PillEditComponent;
  let fixture: ComponentFixture<PillEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
